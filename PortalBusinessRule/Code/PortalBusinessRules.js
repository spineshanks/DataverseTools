var Common = Common || {};
var TriggerEvent = "ONCHANGE";
var ProcessName = null;
var baseTriggerControl = '';
var ifYesFound = false;

Common.BusinessRule = {
    _onload: function () {
        var mappingField = this._getMappingField();
        var index = 0;
        for (var mappingFieldproperty in mappingField) {
            if (mappingField.hasOwnProperty(mappingFieldproperty)) {
                var triggerControl = this._getTriggerControl(mappingFieldproperty);
                baseTriggerControl = mappingField[mappingFieldproperty][triggerControl].source.sourcecontrolname;
                this._onchange(baseTriggerControl);
                index++;
            }
        }
    },
    _getMappingField: function () {
        //ProcessName = ProcessName.replace(/\s+/g, '-').toLowerCase();
        return _pagename[ProcessName];
    },
    _onchange: function (triggercontrol) {

        var mappingField = this._getMappingField();

        if (mappingField) {
            console.log(triggercontrol);
            var optionsetvalue = this._getTriggerControl(triggercontrol);
            var sourcecontrol = mappingField[triggercontrol][optionsetvalue].source;
            var targetcontrol = mappingField[triggercontrol][optionsetvalue].target;

            switch (sourcecontrol.sourcecontroltype) {
                case "optionset":
                    var valuematched = false;
                    if (optionsetvalue === sourcecontrol.checkvalue) {
                        valuematched = true;
                    }
                    this._callActionFunction(mappingField, valuematched, optionsetvalue, targetcontrol);
                    break;
                case "textbox":
                    if (this._hasTriggerControlValue(triggercontrol)) {
                        sourcecontrol = mappingField[triggercontrol][1].source;
                        targetcontrol = mappingField[triggercontrol][1].target;
                    } // check if textbox is having value WEIRED CONDITION CHECK
                    else {
                        sourcecontrol = mappingField[triggercontrol][0].source;
                        targetcontrol = mappingField[triggercontrol][0].target;
                    }
                    this._callActionFunction(mappingField, true, optionsetvalue, targetcontrol);
                    break;
                default:
                    break;
            }
        }
    },
    _callActionFunction: function (mappingField, valuematched, optionsetvalue, targetcontrol) {
        for (var property in targetcontrol) {
            if (targetcontrol.hasOwnProperty(property)) {
                if (TriggerEvent !== "ONLOAD"
                    && targetcontrol[property].resetrequired === undefined) {
                    this._reset(targetcontrol[property].targetcontrolname, targetcontrol[property].targetcontroltype);
                    $(".validation-header").parent('div').hide();
                }
                if (targetcontrol[property].dependent) {
                    //var mappingarrayObject = Object.values(mappingField);
                    var mappingarrayObject = Object.keys(mappingField).map(function (e) {
                        return mappingField[e];
                    });
                    for (var index = 0; index < mappingarrayObject.length; index++) {
                        if (mappingarrayObject[index][0].source.sourcecontrolname === targetcontrol[property].targetcontrolname) {
                            this._onchange(mappingarrayObject[index][0].source.sourcecontrolname);
                        }
                    }
                }

                if (targetcontrol[property].orwith) {
                    if (optionsetvalue !== 1) {
                        if (targetcontrol[property].orwith === baseTriggerControl)
                            continue;

                        //var mappingarrFieldayObject = Object.values(mappingField);
                        var mappingarrFieldayObject = Object.keys(mappingField).map(function (e) {
                            return mappingField[e];
                        });
                        for (index = 0; index < mappingarrFieldayObject.length; index++) {
                            if (mappingarrFieldayObject[index][0].source.sourcecontrolname === targetcontrol[property].orwith) {
                                this._onchange(mappingarrFieldayObject[index][0].source.sourcecontrolname);
                            }
                        }
                    }
                    else { ifYesFound = true; }
                }
                if (ifYesFound) {
                    targetcontrol[property].isvisible = true;
                }

                if (valuematched) {
                    this._showhide(targetcontrol[property].targetcontrolname, targetcontrol[property].isvisible, targetcontrol[property].targetcontroltype);
                    this._required(targetcontrol[property].targetcontrolname, targetcontrol[property].isvisible && targetcontrol[property].isrequired);

                }
                else { // default condition
                    this._showhide(targetcontrol[property].targetcontrolname, false);
                }
            }
        }
    },
    _hasTriggerControlValue: function (triggercontrol) {
        var tcv = $("#" + triggercontrol).val();
        if (tcv !== "")
            return true;
        return false;
    },
    _getTriggerControl: function (triggercontrol) {
        SelectedControlValue = 0;
        var tcv = $("#" + triggercontrol).val();
        if (tcv !== "")
            SelectedControlValue = parseInt(tcv);
        return isNaN(SelectedControlValue) ? 0 : SelectedControlValue;
    },
    _showhide: function (targetcontrol, flag, targetcontroltype) {
        if (flag) {
            $("#" + targetcontrol).closest('td').show();
        }
        else {
            $("#" + targetcontrol).closest('td').hide();
        }

    },
    _reset: function (targetcontrol, targetcontroltype) {
        switch (targetcontroltype) {
            case "string":
                $("#" + targetcontrol).val("");
                break;
            case "optionset":
                $("#" + targetcontrol).val("");
                break;
            case "datetime":
                $("#" + targetcontrol).parent('div').children('div.datetimepicker').children('input').val("");
                $("#" + targetcontrol).val("");

                break;
            case "addresstype":
                $("#" + targetcontrol).parent('div').find('input').val("");
                $("#" + targetcontrol).val(null);
                $("#" + "addressTag_address_" + targetcontrol).html("");
                $("#" + "addressTag_address_" + targetcontrol).hide();
                break;
            default:
                break;
        }

    },
    _required: function (targetcontrol, flag) {
        if (flag) {
            if ($("#" + targetcontrol + "_label").parent().find("div.validators.star").length === 0) {
                $("#" + targetcontrol + "_label").after("<div class='validators star'><span id='RequiredFieldValidatorCommon_title' >*</span></div>");
                this._hideshowfield_addValidator(targetcontrol);
            }
        }
        else {
            if (!ifYesFound) {
                this._hideshowfield_removeValidator(targetcontrol);
                // $(".validation-header").parent('div').hide();
            }
        }
    },

    _hideshowfield_addValidator: function (id) {
        if (typeof (Page_Validators) == "undefined") { return; }
        var fieldname = $("#" + id + "_label").text();
        // Create new validator
        var newValidator = document.createElement("span");
        newValidator.style.display = "none";
        newValidator.id = id + "validator";
        newValidator.controltovalidate = id;
        newValidator.errormessage = "<a href='#" + id + "_label'>" + fieldname + " field is required.</a>";
        newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
        newValidator.initialvalue = "";
        newValidator.evaluationfunction = function () {

            var value = $("#" + id).val();
            if (value == undefined || value == "") {
                return false;
            } else {
                return true;
            }
        };

        // Add the new validator to the page validators array:
        Page_Validators.push(newValidator);

        // Wire-up the click event handler of the validation summary link
        $("a[href='#" + id + "_label']").on("click", function () {
            scrollToAndFocus(id + "_label", id);
        });
    },
    _hideshowfield_removeValidator: function (id) {
        if (typeof (Page_Validators) == "undefined") { return; }
        for (var i = 0; i < Page_Validators.length; i++) {
            if (Page_Validators[i].id != null) {
                if (Page_Validators[i].id == id + "validator") {
                    Page_Validators.splice(i, 1);
                    $("#" + id + "_label").parent().children(".star").remove();
                }
            }
        }



        $("#" + id + "_label").parent().removeClass("required");
    },
    _hideShowBasedOnCheckBox: function (fieldName, sectionOrFieldNameTohide, isSection, clearValueOnHide, fieldType) {
        const checkbox = $("#" + fieldName);

        if (!checkbox.is(":checked")) //Onload
            Common.BusinessRule._hideShowSectionOrField(sectionOrFieldNameTohide, isSection, false, false, fieldType);

        checkbox.change(function (event) {
            var checkbox = event.target;
            if (checkbox.checked) {
                Common.BusinessRule._hideShowSectionOrField(sectionOrFieldNameTohide, isSection, true, clearValueOnHide, fieldType);
            } else {
                Common.BusinessRule._hideShowSectionOrField(sectionOrFieldNameTohide, isSection, false, clearValueOnHide, fieldType);
            }
        });
    },
    _hideShowBasedOnTwoOptionSet: function (fieldName, sectionOrFieldNameTohide, isSection, clearValueOnHide, fieldType) {
        const twoOptionSet = $("#" + fieldName);
        const optionSetValue = twoOptionSet[0].selectedOptions[0].text;

        // "Yes" because some places it is 1 and 0 and some places its a large integer. But everywhere in the system it is Yes and No
        if (optionSetValue != "Yes") //Onload
            Common.BusinessRule._hideShowSectionOrField(sectionOrFieldNameTohide, isSection, false, false, fieldType);

        twoOptionSet.change(function (event) {
            if (event.target.selectedIndex != -1 && (event.target[event.target.selectedIndex])) {
                const optionSetNewValue = (event.target[event.target.selectedIndex]).innerText;

                if (optionSetNewValue == "Yes") {
                    Common.BusinessRule._hideShowSectionOrField(sectionOrFieldNameTohide, isSection, true, clearValueOnHide, fieldType);
                } else {
                    Common.BusinessRule._hideShowSectionOrField(sectionOrFieldNameTohide, isSection, false, clearValueOnHide, fieldType);
                }
            }
            else {
                Common.BusinessRule._hideShowSectionOrField(sectionOrFieldNameTohide, isSection, false, clearValueOnHide, fieldType);
            }
        });
    },

    _hideShowSectionOrField: function (sectionOrFieldName, isSection, show, clearValueOnHide, fieldType) {
        var sectionBlockOrField;

        if (isSection) {
            sectionBlockOrField = $("[data-name=\"" + sectionOrFieldName + "\"]");
        }
        else {
            sectionBlockOrField = $("#" + sectionOrFieldName);
        }

        if (!show && clearValueOnHide && sectionBlockOrField) {

            if (isSection) {
                $.each(sectionBlockOrField.find("input"), function (index, element) {
                    element.value = "";
                });

                $.each(sectionBlockOrField.find("textarea"), function (index, element) {
                    element.value = "";
                });

                $.each(sectionBlockOrField.find("select"), function (index, element) {
                    element.selectedIndex = -1;
                    //To trigger the onchange event and reset the values depending on them
                    var event = new Event('change');
                    element.dispatchEvent(event);

                });
            }
            else {
                //This is yet to be implemented for all the fieldTypes
                switch (fieldType) {
                    case "input": // This is for textbox, multiline text box
                        sectionBlockOrField[0].value = "";
                        break;
                    case "datetime":
                        var dateTimeR = $("input[aria-describedby=\"" + sectionOrFieldName + "_description\"]");
                        if (dateTimeR)
                            (dateTimeR)[0].value = "";
                        break;
                    case "select":
                        sectionBlockOrField[0].selectedIndex = -1;
                        //To trigger the onchange event and reset the values depending on them
                        var event = new Event('change');
                        sectionBlockOrField[0].dispatchEvent(event);
                        break;
                    case "address": // This is for address
                        sectionBlockOrField[0].value = "";
                        $("#Common_postcode_" + sectionOrFieldName)[0].value = "";
                        $("#address_" + sectionOrFieldName)[0].innerHTML = "";
                        break;
                    default: break;
                }
            }
        }

        //Show/Hide based on field or section 
        if (show) {
            if (isSection)
                sectionBlockOrField.closest("fieldset").show();  // Section show
            else {
                sectionBlockOrField.closest("td").show();     //Field show
                Common.BusinessRule._addRemoveRequiredFieldValidator(sectionOrFieldName, true);
            }
        }
        else {
            if (isSection)
                sectionBlockOrField.closest("fieldset").hide();
            else {
                sectionBlockOrField.closest("td").hide();
                Common.BusinessRule._addRemoveRequiredFieldValidator(sectionOrFieldName, false);
            }
        }
    },

    _addRemoveRequiredFieldValidator: function (fieldId, addOrRemove) {
        if (addOrRemove) {
            var fieldValidator = document.getElementById("RequiredFieldValidator" + fieldId);
            if (fieldValidator)
                Page_Validators.push(fieldValidator);
        }
        else {
            for (var i = 0; i < Page_Validators.length; i++) {
                if (Page_Validators[i].id != null) {
                    if (Page_Validators[i].id.includes("RequiredFieldValidator" + fieldId)) {
                        Page_Validators.splice(i, 1);
                    }
                }
            }
        }
    },

    onLoad: function (processName) {
        if (processName !== null)
            ProcessName = processName;
        TriggerEvent = "ONLOAD";
        ifYesFound = false;
        Common.BusinessRule._onload();
    },
    onChange: function (processName, trigger) {
        if (processName !== null)
            ProcessName = processName;

        TriggerEvent = "ONCHANGE";
        baseTriggerControl = trigger;
        ifYesFound = false;
        Common.BusinessRule._onchange(trigger);
    }
};
