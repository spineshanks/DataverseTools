var _pagename = {
    "longform": {
        new_other:
        {
            0: {
                source: { sourcecontrolname: "new_other", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explain: { targetcontrolname: "new_explain", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_other", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explain: { targetcontrolname: "new_explain", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            },
        },
        new_seqratypei:
        {
            0: {
                source: { sourcecontrolname: "new_seqratypei", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_typeispecifycategory: { targetcontrolname: "new_typeispecifycategory", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_seqratypei", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_typeispecifycategory: { targetcontrolname: "new_typeispecifycategory", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_specialpermit: {
            0: {
                source: { sourcecontrolname: "new_specialpermit", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_specialpermittype: { targetcontrolname: "new_specialpermittype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_specialpermitexpirationdate: { targetcontrolname: "new_specialpermitexpirationdate", isrequired: false, targetcontroltype: "datetime", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_specialpermit", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_specialpermittype: { targetcontrolname: "new_specialpermittype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_specialpermitexpirationdate: { targetcontrolname: "new_specialpermitexpirationdate", isrequired: false, targetcontroltype: "datetime", isvisible: true }
                }
            }
        },
        new_boardofstandards:
        {
            0: {
                source: { sourcecontrolname: "new_boardofstandards", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsvarianceuse: { targetcontrolname: "new_boardofstandardsvarianceuse", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_boardofstandardsvariancebulk: { targetcontrolname: "new_boardofstandardsvariancebulk", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_boardofstandardsspecialpermit: { dependent: true, targetcontrolname: "new_boardofstandardsspecialpermit", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_boardofstandardsaffectedsection: { targetcontrolname: "new_boardofstandardsaffectedsection", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_boardofstandards", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsvarianceuse: { targetcontrolname: "new_boardofstandardsvarianceuse", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_boardofstandardsvariancebulk: { targetcontrolname: "new_boardofstandardsvariancebulk", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_boardofstandardsspecialpermit: { dependent: true, targetcontrolname: "new_boardofstandardsspecialpermit", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_boardofstandardsaffectedsection: { targetcontrolname: "new_boardofstandardsaffectedsection", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_boardofstandardsspecialpermit:
        {
            0: {
                source: { sourcecontrolname: "new_boardofstandardsspecialpermit", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsspecialpermittype: { targetcontrolname: "new_boardofstandardsspecialpermittype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_boardofstandardsexpirationdate: { targetcontrolname: "new_boardofstandardsspecialpermittype", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_boardofstandardsspecialpermit", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsspecialpermittype: { targetcontrolname: "new_boardofstandardsspecialpermittype", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_boardofstandardsexpirationdate: { targetcontrolname: "new_boardofstandardsspecialpermittype", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doe:
        {
            0: {
                source: { sourcecontrolname: "new_doe", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doespecifyiforotherspecify: { targetcontrolname: "new_doespecifyiforotherspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doe", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doespecifyiforotherspecify: { targetcontrolname: "new_doespecifyiforotherspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalsother:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalsother", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalsotherifyesspecify: { targetcontrolname: "new_doeotherapprovalsotherifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalsother", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalsotherifyesspecify: { targetcontrolname: "new_doeotherapprovalsotherifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalsfundingofconstruction:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingofconstruction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingofconstructionifyesspecify: { targetcontrolname: "new_doefundingofconstructionifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingofconstruction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingofconstructionifyesspecify: { targetcontrolname: "new_doefundingofconstructionifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalspolicyorplan:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalspolicyorplan", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspolicyorplanifyesspecify: { targetcontrolname: "new_doeotherapprovalspolicyorplanifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalspolicyorplan", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspolicyorplanifyesspecify: { targetcontrolname: "new_doeotherapprovalspolicyorplanifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalsfundingprograms:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingprograms", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingprogramsifyespecify: { targetcontrolname: "new_doefundingprogramsifyespecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingprograms", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingprogramsifyespecify: { targetcontrolname: "new_doefundingprogramsifyespecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalspermits:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalspermits", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspoermitsifyesspecify: { targetcontrolname: "new_doeotherapprovalspoermitsifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalspermits", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspoermitsifyesspecify: { targetcontrolname: "new_doeotherapprovalspoermitsifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_othercityother:
        {
            0: {
                source: { sourcecontrolname: "new_othercityother", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_othercityotherifotherexplain: { targetcontrolname: "new_othercityotherifotherexplain", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_othercityother", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_othercityotherifotherexplain: { targetcontrolname: "new_othercityotherifotherexplain", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_stateorfederalaction:
        {
            0: {
                source: { sourcecontrolname: "new_stateorfederalaction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_stateorfederalspecificatioinifyesspecify: { targetcontrolname: "new_stateorfederalspecificatioinifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_stateorfederalaction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_stateorfederalspecificatioinifyesspecify: { targetcontrolname: "new_stateorfederalspecificatioinifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_involvesitezoningchanges:
        {
            0: {
                source: { sourcecontrolname: "new_involvesitezoningchanges", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_totalsqftownedcontrolledbyapplicantrange: { targetcontrolname: "new_totalsqftownedcontrolledbyapplicantrange", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_totalsqftnotownedcontrolledbyapplicant: { targetcontrolname: "new_totalsqftnotownedcontrolledbyapplicant", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_involvesitezoningchanges", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_totalsqftownedcontrolledbyapplicantrange: { targetcontrolname: "new_totalsqftownedcontrolledbyapplicantrange", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_totalsqftnotownedcontrolledbyapplicant: { targetcontrolname: "new_totalsqftnotownedcontrolledbyapplicant", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doestheprojectinvolvedingroundexcavation:
        {
            0: {
                source: { sourcecontrolname: "new_doestheprojectinvolvedingroundexcavation", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_areaoftemporarydisturbancesqftrange: { targetcontrolname: "new_areaoftemporarydisturbancesqftrange", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_areaofpermanentdisturbancesqftrange: { targetcontrolname: "new_areaofpermanentdisturbancesqftrange", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_volumeofdisturbancecubftrange: { targetcontrolname: "new_volumeofdisturbancecubftrange", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doestheprojectinvolvedingroundexcavation", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_areaoftemporarydisturbancesqftrange: { targetcontrolname: "new_areaoftemporarydisturbancesqftrange", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_areaofpermanentdisturbancesqftrange: { targetcontrolname: "new_areaofpermanentdisturbancesqftrange", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_volumeofdisturbancecubftrange: { targetcontrolname: "new_volumeofdisturbancecubftrange", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectsinglephase:
        {
            0: {
                source: { sourcecontrolname: "new_projectsinglephase", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_ifmultiplehowmanyphases: { targetcontrolname: "new_ifmultiplehowmanyphases", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectsinglephase", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_ifmultiplehowmanyphases: { targetcontrolname: "new_ifmultiplehowmanyphases", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            }
        },
        new_landuseother:
        {
            0: {
                source: { sourcecontrolname: "new_landuseother", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_landuseotherpleasespecify: { targetcontrolname: "new_landuseotherpleasespecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_landuseother", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_landuseotherpleasespecify: { targetcontrolname: "new_landuseotherpleasespecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_proposedprojectresultchangeinlanduse:
        {
            0: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinlanduse", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_proposedprojectresultchangeinzoning" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinlanduse", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_proposedprojectresultchangeinzoning" }
                }
            }
        },
        new_proposedprojectresultchangeinzoning:
        {
            0: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinzoning", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_potentialtoaffectanapplicablepublicpolicy" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinzoning", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_potentialtoaffectanapplicablepublicpolicy" }
                }
            }
        },
        new_potentialtoaffectanapplicablepublicpolicy:
        {
            0: {
                source: { sourcecontrolname: "new_potentialtoaffectanapplicablepublicpolicy", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_proposedprojectresultchangeinlanduse" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_potentialtoaffectanapplicablepublicpolicy", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_proposedprojectresultchangeinlanduse" }
                }
            }
        },
        new_isprojectlargepubliclysponsoredproject:
        {
            0: {
                source: { sourcecontrolname: "new_isprojectlargepubliclysponsoredproject", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeaplanycassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeaplanycassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isprojectlargepubliclysponsoredproject", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeaplanycassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeaplanycassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_isanypartdirectlyaffectedareawithincity:
        {
            0: {
                source: { sourcecontrolname: "new_isanypartdirectlyaffectedareawithincity", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completetheconsistencyassessmentform: { resetrequired: false, targetcontrolname: "new_completetheconsistencyassessmentform", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isanypartdirectlyaffectedareawithincity", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completetheconsistencyassessmentform: { resetrequired: false, targetcontrolname: "new_completetheconsistencyassessmentform", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_generatenetincreaseofmorethan200resident:
        {
            0: {
                source: { sourcecontrolname: "new_generatenetincreaseofmorethan200resident", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_directlydisplace500ormoreresidents" },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_generatenetincreaseofmorethan200resident", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_directlydisplace500ormoreresidents" },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_directlydisplace500ormoreresidents:
        {
            0: {
                source: { sourcecontrolname: "new_directlydisplace500ormoreresidents", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_woulddisplacedresidentrepresentpopulation: {
                        dependent: true, targetcontrolname: "new_woulddisplacedresidentrepresentpopulation", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_generatenetincreaseofmorethan200resident"
                    }
                }
            },
            1: {
                source: { sourcecontrolname: "new_directlydisplace500ormoreresidents", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_woulddisplacedresidentrepresentpopulation: { dependent: true, targetcontrolname: "new_woulddisplacedresidentrepresentpopulation", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_generatenetincreaseofmorethan200resident" }
                }
            }
        },
        new_directlydisplacemorethan100employees:
        {
            0: {
                source: { sourcecontrolname: "new_directlydisplacemorethan100employees", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_displacedbusinessesprovidegoodsorservices: { targetcontrolname: "new_displacedbusinessesprovidegoodsorservices", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_isanybusinesscategorybedisplaceregulation: { targetcontrolname: "new_isanybusinesscategorybedisplaceregulation", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_directlydisplacemorethan100employees", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_displacedbusinessesprovidegoodsorservices: { targetcontrolname: "new_displacedbusinessesprovidegoodsorservices", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_isanybusinesscategorybedisplaceregulation: { targetcontrolname: "new_isanybusinesscategorybedisplaceregulation", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_affectconditionsinaspecificindustry:
        {
            0: {
                source: { sourcecontrolname: "new_affectconditionsinaspecificindustry", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectsignificantlyaffectbusiness: { targetcontrolname: "new_wouldprojectsignificantlyaffectbusiness", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectindirectlyreduceemployment: { targetcontrolname: "new_wouldprojectindirectlyreduceemployment", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_affectconditionsinaspecificindustry", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectsignificantlyaffectbusiness: { targetcontrolname: "new_wouldprojectsignificantlyaffectbusiness", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectindirectlyreduceemployment: { targetcontrolname: "new_wouldprojectindirectlyreduceemployment", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldaverageincomesofnewpopulationgreater:
        {
            0: {
                source: { sourcecontrolname: "new_wouldaverageincomesofnewpopulationgreater", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { dependent: true, targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby5", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldaverageincomesofnewpopulationgreater", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { dependent: true, targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby5", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldpopulationofprimaryareaincreaseby10:
        {
            0: {
                source: { sourcecontrolname: "new_wouldpopulationofprimaryareaincreaseby10", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldmorethan5percentunitsrenteroccupied: { targetcontrolname: "new_wouldmorethan5percentunitsrenteroccupied", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldpopulationofprimaryareaincreaseby10", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldmorethan5percentunitsrenteroccupied: { targetcontrolname: "new_wouldmorethan5percentunitsrenteroccupied", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_woulddisplacedresidentrepresentpopulation:
        {
            0: {
                source: { sourcecontrolname: "new_woulddisplacedresidentrepresentpopulation", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_isaverageincomeofdisplacedpopulationless: { dependent: true, targetcontrolname: "new_isaverageincomeofdisplacedpopulationless", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_woulddisplacedresidentrepresentpopulation", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_isaverageincomeofdisplacedpopulationless: { dependent: true, targetcontrolname: "new_isaverageincomeofdisplacedpopulationless", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_isaverageincomeofdisplacedpopulationless:
        {
            0: {
                source: { sourcecontrolname: "new_isaverageincomeofdisplacedpopulationless", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isaverageincomeofdisplacedpopulationless", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultin20ormoreelibigblechildren:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultin20ormoreelibigblechildren", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultinacollectiveutilizationrate: { dependent: true, targetcontrolname: "new_projectresultinacollectiveutilizationrate", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultin20ormoreelibigblechildren", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultinacollectiveutilizationrate: { dependent: true, targetcontrolname: "new_projectresultinacollectiveutilizationrate", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultinacollectiveutilizationrate:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultinacollectiveutilizationrate", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectincreasethecollectiveutilizationra: { targetcontrolname: "new_projectincreasethecollectiveutilizationra", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultinacollectiveutilizationrate", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectincreasethecollectiveutilizationra: { targetcontrolname: "new_projectincreasethecollectiveutilizationra", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultina5percentormorein:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultina5percentormorein", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethestudy: { dependent: true, targetcontrolname: "new_wouldtheprojectincreasethestudy", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultina5percentormorein", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethestudy: { dependent: true, targetcontrolname: "new_wouldtheprojectincreasethestudy", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectincreasethestudy:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectincreasethestudy", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheadditionalpopulationimpair: { targetcontrolname: "new_wouldtheadditionalpopulationimpair", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectincreasethestudy", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheadditionalpopulationimpair: { targetcontrolname: "new_wouldtheadditionalpopulationimpair", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultin50ormoreelementary:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultin50ormoreelementary", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultinacollective: { dependent: true, targetcontrolname: "new_wouldtheprojectresultinacollective", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultin50ormoreelementary", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultinacollective: { dependent: true, targetcontrolname: "new_wouldtheprojectresultinacollective", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultinacollective:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultinacollective", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethiscollective: { targetcontrolname: "new_wouldtheprojectincreasethiscollective", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultinacollective", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethiscollective: { targetcontrolname: "new_wouldtheprojectincreasethiscollective", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultintheintroduction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultintheintroduction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationofhealth: { targetcontrolname: "new_wouldtheprojectaffecttheoperationofhealth", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultintheintroduction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationofhealth: { targetcontrolname: "new_wouldtheprojectaffecttheoperationofhealth", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_introductionofasizeablenewneighbour:
        {
            0: {
                source: { sourcecontrolname: "new_introductionofasizeablenewneighbour", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationoffire: { targetcontrolname: "new_wouldtheprojectaffecttheoperationoffire", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_introductionofasizeablenewneighbour", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationoffire: { targetcontrolname: "new_wouldtheprojectaffecttheoperationoffire", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_istheprojectlocatedwithinanunderserved:
        {
            0: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinanunderserved", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan50addition: { dependent: true, targetcontrolname: "new_wouldtheprojectgeneratemorethan50addition", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinanunderserved", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan50addition: { dependent: true, targetcontrolname: "new_wouldtheprojectgeneratemorethan50addition", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectgeneratemorethan50addition:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectgeneratemorethan50addition", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformation: { resetrequired: false, targetcontrolname: "new_attachsupportinginformation", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_ifinanunderservedareawouldtheproject: { targetcontrolname: "new_ifinanunderservedareawouldtheproject", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_ifinanareathatisnotunderservedwouldthe: { targetcontrolname: "new_ifinanareathatisnotunderservedwouldthe", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectgeneratemorethan50addition", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformation: { resetrequired: false, targetcontrolname: "new_attachsupportinginformation", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_ifinanunderservedareawouldtheproject: { targetcontrolname: "new_ifinanunderservedareawouldtheproject", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_ifinanareathatisnotunderservedwouldthe: { targetcontrolname: "new_ifinanareathatisnotunderservedwouldthe", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_istheprojectlocatedwithinawellserved:
        {
            0: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinawellserved", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan350: { targetcontrolname: "new_wouldtheprojectgeneratemorethan350", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinawellserved", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan350: { targetcontrolname: "new_wouldtheprojectgeneratemorethan350", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectresultinanet:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinanet", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_wouldtheproposedprojectresultinany" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinanet", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_wouldtheproposedprojectresultinany" }
                }
            }
        },
        new_wouldtheproposedprojectresultinany:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinany", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_wouldtheproposedprojectresultinanet" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinany", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_wouldtheproposedprojectresultinanet" }
                }
            }
        },
        new_doesprojectcontainarchitecturalresource:
        {
            0: {
                source: { sourcecontrolname: "new_doesprojectcontainarchitecturalresource", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_wouldproposedprojectinvolveconstruction" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doesprojectcontainarchitecturalresource", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_wouldproposedprojectinvolveconstruction" }
                }
            }
        },
        new_wouldproposedprojectinvolveconstruction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectinvolveconstruction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_doesprojectcontainarchitecturalresource" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectinvolveconstruction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_doesprojectcontainarchitecturalresource" }
                }
            }
        },
        new_wouldproposedprojectintroduceanewbuilding:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectintroduceanewbuilding", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: {
                        targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldproposedprojectresultinobstruction"
                    }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectintroduceanewbuilding", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: { targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldproposedprojectresultinobstruction" }
                }
            }
        },
        new_wouldproposedprojectresultinobstruction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultinobstruction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: { targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldproposedprojectintroduceanewbuilding" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultinobstruction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: { targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldproposedprojectintroduceanewbuilding" }
                }
            }
        },
        new_doestheprojectsitecontainnaturalresources:
        {
            0: {
                source: { sourcecontrolname: "new_doestheprojectsitecontainnaturalresources", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_listresourcesattachsupportinginformation: { targetcontrolname: "new_listresourcesattachsupportinginformation", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doestheprojectsitecontainnaturalresources", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_listresourcesattachsupportinginformation: { targetcontrolname: "new_listresourcesattachsupportinginformation", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_isaffectedareawithinjamaicabaywatershed:
        {
            0: {
                source: { sourcecontrolname: "new_isaffectedareawithinjamaicabaywatershed", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completejamaicabaywatershedform: { resetrequired: false, targetcontrolname: "new_completejamaicabaywatershedform", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isaffectedareawithinjamaicabaywatershed", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completejamaicabaywatershedform: { resetrequired: false, targetcontrolname: "new_completejamaicabaywatershedform", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectinvolveconstructionofnew:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectinvolveconstructionofnew", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatepreliminaryanalysesa: { targetcontrolname: "new_conducttheappropriatepreliminaryanalysesa", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectinvolveconstructionofnew", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatepreliminaryanalysesa: { targetcontrolname: "new_conducttheappropriatepreliminaryanalysesa", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectinvolveareduction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectinvolveareduction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectcomplywiththecitys: { targetcontrolname: "new_wouldtheproposedprojectcomplywiththecitys", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectinvolveareduction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectcomplywiththecitys: { targetcontrolname: "new_wouldtheproposedprojectcomplywiththecitys", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectexceedanythreshold:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectexceedanythreshold", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatescreeninganalysis: { targetcontrolname: "new_conducttheappropriatescreeninganalysis", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false },
                    new_wouldtheproposedprojectresultin50ormore: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultin50ormore", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldtheproposedprojectresultinmorethan2: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultinmorethan2", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_projectresultsinmorethan200pedestriantrip: { dependent: true, targetcontrolname: "new_projectresultsinmorethan200pedestriantrip", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectexceedanythreshold", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatescreeninganalysis: { targetcontrolname: "new_conducttheappropriatescreeninganalysis", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false },
                    new_wouldtheproposedprojectresultin50ormore: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultin50ormore", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldtheproposedprojectresultinmorethan2: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultinmorethan2", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_projectresultsinmorethan200pedestriantrip: { dependent: true, targetcontrolname: "new_projectresultsinmorethan200pedestriantrip", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectresultin50ormore:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultin50ormore", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_vehicletripsperprojectpeakhour: { targetcontrolname: "new_vehicletripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultin50ormore", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_vehicletripsperprojectpeakhour: { targetcontrolname: "new_vehicletripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectresultinmorethan2:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinmorethan2", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultperprojectpeakhour: { targetcontrolname: "new_projectresultperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinmorethan2", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultperprojectpeakhour: { targetcontrolname: "new_projectresultperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultsinmorethan200pedestriantrip:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultsinmorethan200pedestriantrip", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectpedestriantripsperprojectpeakhour: { targetcontrolname: "new_projectpedestriantripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultsinmorethan200pedestriantrip", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectpedestriantripsperprojectpeakhour: { targetcontrolname: "new_projectpedestriantripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectsitehaveexistinginstitutionalcont:
        {
            0: {
                source: { sourcecontrolname: "new_projectsitehaveexistinginstitutionalcont", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_projectresultinconditionoutlinedinsec220" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectsitehaveexistinginstitutionalcont", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_projectresultinconditionoutlinedinsec220" }
                }
            }
        },
        new_wouldproposedprojectresultindevelopment:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultindevelopment", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectrequireaghgemissions: { dependent: true, targetcontrolname: "new_wouldtheprojectrequireaghgemissions", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultindevelopment", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectrequireaghgemissions: { dependent: true, targetcontrolname: "new_wouldtheprojectrequireaghgemissions", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectrequireaghgemissions:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectrequireaghgemissions", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultininconsistencies: { targetcontrolname: "new_wouldtheprojectresultininconsistencies", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectrequireaghgemissions", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultininconsistencies: { targetcontrolname: "new_wouldtheprojectresultininconsistencies", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectgenerateorreroute:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectgenerateorreroute", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldtheproposedprojectintroducenew" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectgenerateorreroute", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldtheproposedprojectintroducenew" }
                }
            }
        },
        new_wouldtheproposedprojectintroducenew:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectintroducenew", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldtheproposedprojectcauseastationary" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectintroducenew", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldtheproposedprojectcauseastationary" }
                }
            }
        },
        new_wouldtheproposedprojectcauseastationary:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectcauseastationary", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_doestheprojectsitehaveexistinginstitution" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectcauseastationary", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_doestheprojectsitehaveexistinginstitution" }
                }
            }
        },
        new_doestheprojectsitehaveexistinginstitution:
        {
            0: {
                source: { sourcecontrolname: "new_doestheprojectsitehaveexistinginstitution", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", resetrequired: false, isvisible: false, orwith: "new_wouldtheproposedprojectgenerateorreroute" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doestheprojectsitehaveexistinginstitution", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", resetrequired: false, isvisible: true, orwith: "new_wouldtheproposedprojectgenerateorreroute" }
                }
            }
        },
        new_baseduponanalysesconductedtechnical:
        {
            0: {
                source: { sourcecontrolname: "new_baseduponanalysesconductedtechnical", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofpublichealth: { targetcontrolname: "new_explainwhyanassessmentofpublichealth", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_baseduponanalysesconductedtechnical", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofpublichealth: { targetcontrolname: "new_explainwhyanassessmentofpublichealth", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_basedupontheanalysesconducted:
        {
            0: {
                source: { sourcecontrolname: "new_basedupontheanalysesconducted", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofneighborhood: { targetcontrolname: "new_explainwhyanassessmentofneighborhood", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_basedupontheanalysesconducted", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofneighborhood: { targetcontrolname: "new_explainwhyanassessmentofneighborhood", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_constructionactivitieslastinglonger:
        {
            0: {
                source: { sourcecontrolname: "new_constructionactivitieslastinglonger", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructionactivitieswithinacentral" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructionactivitieslastinglonger", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructionactivitieswithinacentral" }
                }
            }
        },
        new_constructionactivitieswithinacentral:
        {
            0: {
                source: { sourcecontrolname: "new_constructionactivitieswithinacentral", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_closingnarrowingotherwiseimpedingtraffic" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructionactivitieswithinacentral", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_closingnarrowingotherwiseimpedingtraffic" }
                }
            }
        },
        new_closingnarrowingotherwiseimpedingtraffic:
        {
            0: {
                source: { sourcecontrolname: "new_closingnarrowingotherwiseimpedingtraffic", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructionofmultiplebuildings" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_closingnarrowingotherwiseimpedingtraffic", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructionofmultiplebuildings" }
                }
            }
        },
        new_constructionofmultiplebuildings:
        {
            0: {
                source: { sourcecontrolname: "new_constructionofmultiplebuildings", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_theoperationseveralpieceofdieselequipment" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructionofmultiplebuildings", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_theoperationseveralpieceofdieselequipment" }
                }
            }
        },
        new_theoperationseveralpieceofdieselequipment:
        {
            0: {
                source: { sourcecontrolname: "new_theoperationseveralpieceofdieselequipment", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_closureofacommunityfacilityordisruption" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_theoperationseveralpieceofdieselequipment", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_closureofacommunityfacilityordisruption" }
                }
            }
        },
        new_closureofacommunityfacilityordisruption:
        {
            0: {
                source: { sourcecontrolname: "new_closureofacommunityfacilityordisruption", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_activitieswithin400feetofahistoric" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_closureofacommunityfacilityordisruption", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_activitieswithin400feetofahistoric" }
                }
            }
        },
        new_activitieswithin400feetofahistoric:
        {
            0: {
                source: { sourcecontrolname: "new_activitieswithin400feetofahistoric", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_disturbanceofasitecontainingoradjacent" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_activitieswithin400feetofahistoric", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_disturbanceofasitecontainingoradjacent" }
                }
            }
        },
        new_disturbanceofasitecontainingoradjacent:
        {
            0: {
                source: { sourcecontrolname: "new_disturbanceofasitecontainingoradjacent", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructiononmultipledevelopmentsites" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_disturbanceofasitecontainingoradjacent", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructiononmultipledevelopmentsites" }
                }
            }
        },
        new_constructiononmultipledevelopmentsites:
        {
            0: {
                source: { sourcecontrolname: "new_constructiononmultipledevelopmentsites", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructionactivitieslastinglonger" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructiononmultipledevelopmentsites", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructionactivitieslastinglonger" }
                }
            }
        },
        new_projectaspects:
        {
            0: {
                source: { sourcecontrolname: "new_projectaspects", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhetherprojecthavesignificant: { targetcontrolname: "new_explainwhetherprojecthavesignificant", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectaspects", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhetherprojecthavesignificant: { targetcontrolname: "new_explainwhetherprojecthavesignificant", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultinconditionoutlinedinsec220:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultinconditionoutlinedinsec220", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectexceedthethreshold: { targetcontrolname: "new_wouldtheproposedprojectexceedthethreshold", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_projectsitehaveexistinginstitutionalcont" },
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultinconditionoutlinedinsec220", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectexceedthethreshold: { targetcontrolname: "new_wouldtheproposedprojectexceedthethreshold", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_projectsitehaveexistinginstitutionalcont" },
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        }
    },
    "ceqrconditionform": {
        new_existingconditionresidential: {
            0: {
                source: { sourcecontrolname: "new_existingconditionresidential", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionresidentialstructures: { targetcontrolname: "new_existingconditionresidentialstructures", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditionresidentialnumberofunits: { targetcontrolname: "new_existingconditionresidentialnumberofunits", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingresidentialnomodeincomeunit: { targetcontrolname: "new_existingresidentialnomodeincomeunit", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingresidentialgrossfloorarea: { targetcontrolname: "new_existingresidentialgrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionresidential", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionresidentialstructures: { targetcontrolname: "new_existingconditionresidentialstructures", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditionresidentialnumberofunits: { targetcontrolname: "new_existingconditionresidentialnumberofunits", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingresidentialnomodeincomeunit: { targetcontrolname: "new_existingresidentialnomodeincomeunit", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingresidentialgrossfloorarea: { targetcontrolname: "new_existingresidentialgrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditionresidential:
        {
            0: {
                source: { sourcecontrolname: "new_noactionconditionresidential", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionresidentialtypeofstructures: { targetcontrolname: "new_noactionresidentialtypeofstructures", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditionresidentialnumberofunits: { targetcontrolname: "new_noactionconditionresidentialnumberofunits", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionresidentialnumberlowincomeunits: { targetcontrolname: "new_noactionresidentialnumberlowincomeunits", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditionresidentialgrossflorarea: { targetcontrolname: "new_noactionconditionresidentialgrossflorarea", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionresidentialtypeofstructures: { targetcontrolname: "new_withactionresidentialtypeofstructures", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionconditionresidentialnoofunits: { targetcontrolname: "new_withactionconditionresidentialnoofunits", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionresidentialnumberlowincomeunits: { targetcontrolname: "new_withactionresidentialnumberlowincomeunits", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionresidentialgrossfloorarea: { targetcontrolname: "new_withactionresidentialgrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false },
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionresidential", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionresidentialtypeofstructures: { targetcontrolname: "new_noactionresidentialtypeofstructures", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditionresidentialnumberofunits: { targetcontrolname: "new_noactionconditionresidentialnumberofunits", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionresidentialnumberlowincomeunits: { targetcontrolname: "new_noactionresidentialnumberlowincomeunits", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditionresidentialgrossflorarea: { targetcontrolname: "new_noactionconditionresidentialgrossflorarea", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionresidentialtypeofstructures: { targetcontrolname: "new_withactionresidentialtypeofstructures", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionconditionresidentialnoofunits: { targetcontrolname: "new_withactionconditionresidentialnoofunits", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionresidentialnumberlowincomeunits: { targetcontrolname: "new_withactionresidentialnumberlowincomeunits", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionresidentialgrossfloorarea: { targetcontrolname: "new_withactionresidentialgrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true },
                }
            }
        },
        new_existingconditioncommercial: {
            0: {
                source: { sourcecontrolname: "new_existingconditioncommercial", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditioncommercialtypestructure: { targetcontrolname: "new_existingconditioncommercialtypestructure", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditioncommercialgrossfloorarea: { targetcontrolname: "new_existingconditioncommercialgrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditioncommercial", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditioncommercialtypestructure: { targetcontrolname: "new_existingconditioncommercialtypestructure", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditioncommercialgrossfloorarea: { targetcontrolname: "new_existingconditioncommercialgrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_noactionconditioncommercial: {
            0: {
                source: { sourcecontrolname: "new_noactionconditioncommercial", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditioncommercialtypestructure: { targetcontrolname: "new_noactionconditioncommercialtypestructure", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditioncommercialgrossfloorarea: { targetcontrolname: "new_noactionconditioncommercialgrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditioncommercial", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditioncommercialtypestructure: { targetcontrolname: "new_noactionconditioncommercialtypestructure", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditioncommercialgrossfloorarea: { targetcontrolname: "new_noactionconditioncommercialgrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditioncommercial: {
            0: {
                source: { sourcecontrolname: "new_withactionconditioncommercial", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionscommercialtypeofstructures: { targetcontrolname: "new_withactionscommercialtypeofstructures", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactioncommercialgrossfloorarea: { targetcontrolname: "new_withactioncommercialgrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditioncommercial", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionscommercialtypeofstructures: { targetcontrolname: "new_withactionscommercialtypeofstructures", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactioncommercialgrossfloorarea: { targetcontrolname: "new_withactioncommercialgrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditionmanufacturing: {
            0: {
                source: { sourcecontrolname: "new_existingconditionmanufacturing", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingmanufacturingtype: { targetcontrolname: "new_existingmanufacturingtype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingmanufacturinggrossfloorarea: { targetcontrolname: "new_existingmanufacturinggrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingmanufacturingopenstoragearea: { targetcontrolname: "new_existingmanufacturingopenstoragearea", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingmanufacturingunenclosedactivities: { targetcontrolname: "new_existingmanufacturingunenclosedactivities", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionmanufacturing", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingmanufacturingtype: { targetcontrolname: "new_existingmanufacturingtype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingmanufacturinggrossfloorarea: { targetcontrolname: "new_existingmanufacturinggrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingmanufacturingopenstoragearea: { targetcontrolname: "new_existingmanufacturingopenstoragearea", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingmanufacturingunenclosedactivities: { targetcontrolname: "new_existingmanufacturingunenclosedactivities", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditionmanufacturing: {
            0: {
                source: { sourcecontrolname: "new_noactionconditionmanufacturing", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionmanufacturingtype: { targetcontrolname: "new_noactionmanufacturingtype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionmanufacturinggrossfloorarea: { targetcontrolname: "new_noactionmanufacturinggrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionmanufacturingopenstoragearea: { targetcontrolname: "new_noactionmanufacturingopenstoragearea", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionmanufacturingunenclosedactivities: { targetcontrolname: "new_noactionmanufacturingunenclosedactivities", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionmanufacturing", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionmanufacturingtype: { targetcontrolname: "new_noactionmanufacturingtype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionmanufacturinggrossfloorarea: { targetcontrolname: "new_noactionmanufacturinggrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionmanufacturingopenstoragearea: { targetcontrolname: "new_noactionmanufacturingopenstoragearea", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionmanufacturingunenclosedactivities: { targetcontrolname: "new_noactionmanufacturingunenclosedactivities", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditionmanufacturing: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionmanufacturing", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionmanufacturingtype: { targetcontrolname: "new_withactionmanufacturingtype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionmanufacturinggrossfloorarea: { targetcontrolname: "new_withactionmanufacturinggrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionmanufacturingopenstoragearea: { targetcontrolname: "new_withactionmanufacturingopenstoragearea", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionmanufactureunenclosedactivities: { targetcontrolname: "new_withactionmanufactureunenclosedactivities", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionmanufacturing", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionmanufacturingtype: { targetcontrolname: "new_withactionmanufacturingtype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionmanufacturinggrossfloorarea: { targetcontrolname: "new_withactionmanufacturinggrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionmanufacturingopenstoragearea: { targetcontrolname: "new_withactionmanufacturingopenstoragearea", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionmanufactureunenclosedactivities: { targetcontrolname: "new_withactionmanufactureunenclosedactivities", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditioncommunityfacility: {
            0: {
                source: { sourcecontrolname: "new_existingconditioncommunityfacility", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditioncommunityfacilitytype: { targetcontrolname: "new_existingconditioncommunityfacilitytype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingcommunitygrossfloorarea: { targetcontrolname: "new_existingcommunitygrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditioncommunityfacility", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditioncommunityfacilitytype: { targetcontrolname: "new_existingconditioncommunityfacilitytype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingcommunitygrossfloorarea: { targetcontrolname: "new_existingcommunitygrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditioncommunityfacility: {
            0: {
                source: { sourcecontrolname: "new_noactionconditioncommunityfacility", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditioncommunityfacilitytype: { targetcontrolname: "new_noactionconditioncommunityfacilitytype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditioncommunitygrossfloorarea: { targetcontrolname: "new_noactionconditioncommunitygrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditioncommunityfacility", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditioncommunityfacilitytype: { targetcontrolname: "new_noactionconditioncommunityfacilitytype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditioncommunitygrossfloorarea: { targetcontrolname: "new_noactionconditioncommunitygrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditioncommunityfacility: {
            0: {
                source: { sourcecontrolname: "new_withactionconditioncommunityfacility", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditioncommunityfacilitytype: { targetcontrolname: "new_withactionconditioncommunityfacilitytype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactioncommunitygrossfloorarea: { targetcontrolname: "new_withactioncommunitygrossfloorarea", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditioncommunityfacility", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditioncommunityfacilitytype: { targetcontrolname: "new_withactionconditioncommunityfacilitytype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactioncommunitygrossfloorarea: { targetcontrolname: "new_withactioncommunitygrossfloorarea", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditionvacantland: {
            0: {
                source: { sourcecontrolname: "new_existingconditionvacantland", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionvacantlanddescribe: { targetcontrolname: "new_existingconditionvacantlanddescribe", isrequired: false, targetcontroltype: "string", isvisible: false }

                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionvacantland", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionvacantlanddescribe: { targetcontrolname: "new_existingconditionvacantlanddescribe", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditionvacantland: {
            0: {
                source: { sourcecontrolname: "new_noactionconditionvacantland", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionvacantlanddescribe: { targetcontrolname: "new_noactionconditionvacantlanddescribe", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionvacantland", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionvacantlanddescribe: { targetcontrolname: "new_noactionconditionvacantlanddescribe", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditionvacantland: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionvacantland", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionvacantlanddescribe: { targetcontrolname: "new_withactionconditionvacantlanddescribe", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionvacantland", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionvacantlanddescribe: { targetcontrolname: "new_withactionconditionvacantlanddescribe", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingpubliclyaccessibleopenspacebool: {
            0: {
                source: { sourcecontrolname: "new_existingpubliclyaccessibleopenspacebool", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingpubliclyaccessibleopenspace: { targetcontrolname: "new_existingpubliclyaccessibleopenspace", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingpubliclyaccessibleopenspacebool", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingpubliclyaccessibleopenspace: { targetcontrolname: "new_existingpubliclyaccessibleopenspace", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionpubliclyaccessibleopenspacebool:
        {
            0: {
                source: { sourcecontrolname: "new_noactionpubliclyaccessibleopenspacebool", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionpubliclyaccessibleopenspace: { targetcontrolname: "new_noactionpubliclyaccessibleopenspace", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionpubliclyaccessibleopenspacebool", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionpubliclyaccessibleopenspace: { targetcontrolname: "new_noactionpubliclyaccessibleopenspace", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditionotherlanduses:
        {
            0: {
                source: { sourcecontrolname: "new_existingconditionotherlanduses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionotherlandusesdescription: { targetcontrolname: "new_existingconditionotherlandusesdescription", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionotherlanduses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionotherlandusesdescription: { targetcontrolname: "new_existingconditionotherlandusesdescription", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditionotherlanduses:
        {
            0: {
                source: { sourcecontrolname: "new_noactionconditionotherlanduses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionotherlandusesdescription: { targetcontrolname: "new_noactionconditionotherlandusesdescription", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionotherlanduses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionotherlandusesdescription: { targetcontrolname: "new_noactionconditionotherlandusesdescription", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditionotherlanduses:
        {
            0: {
                source: { sourcecontrolname: "new_withactionconditionotherlanduses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionotherlandusedescribe: { targetcontrolname: "new_withactionconditionotherlandusedescribe", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionotherlanduses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionotherlandusedescribe: { targetcontrolname: "new_withactionconditionotherlandusedescribe", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditiongarages:
        {
            0: {
                source: { sourcecontrolname: "new_existingconditiongarages", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditiongaragesnumberpublicspace: { targetcontrolname: "new_existingconditiongaragesnumberpublicspace", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existinggaragesnumberaccessoryspaces: { targetcontrolname: "new_existinggaragesnumberaccessoryspaces", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditiongarageshoursofoperation: { targetcontrolname: "new_existingconditiongarageshoursofoperation", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditiongaragesattnedorunattend: { targetcontrolname: "new_existingconditiongaragesattnedorunattend", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditiongarages", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditiongaragesnumberpublicspace: { targetcontrolname: "new_existingconditiongaragesnumberpublicspace", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existinggaragesnumberaccessoryspaces: { targetcontrolname: "new_existinggaragesnumberaccessoryspaces", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditiongarageshoursofoperation: { targetcontrolname: "new_existingconditiongarageshoursofoperation", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditiongaragesattnedorunattend: { targetcontrolname: "new_existingconditiongaragesattnedorunattend", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditiongarages:
        {
            0: {
                source: { sourcecontrolname: "new_noactionconditiongarages", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditiongaragesnumberpublicspace: { targetcontrolname: "new_noactionconditiongaragesnumberpublicspace", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactiongaragesnumberaccessoryspaces: { targetcontrolname: "new_noactiongaragesnumberaccessoryspaces", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditiongarageshoursofoperation: { targetcontrolname: "new_noactionconditiongarageshoursofoperation", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditiongaragesattnedorunattend: { targetcontrolname: "new_noactionconditiongaragesattnedorunattend", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditiongarages", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditiongaragesnumberpublicspace: { targetcontrolname: "new_noactionconditiongaragesnumberpublicspace", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactiongaragesnumberaccessoryspaces: { targetcontrolname: "new_noactiongaragesnumberaccessoryspaces", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditiongarageshoursofoperation: { targetcontrolname: "new_noactionconditiongarageshoursofoperation", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditiongaragesattnedorunattend: { targetcontrolname: "new_noactionconditiongaragesattnedorunattend", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditiongarages:
        {
            0: {
                source: { sourcecontrolname: "new_withactionconditiongarages", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactiongaragesnumberpublicspaces: { targetcontrolname: "new_withactiongaragesnumberpublicspaces", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactiongaragesnumberaccessoryspaces: { targetcontrolname: "new_withactiongaragesnumberaccessoryspaces", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionconditiongarageshoursoperation: { targetcontrolname: "new_withactionconditiongarageshoursoperation", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactiongaragesattnededorunattended: { targetcontrolname: "new_withactiongaragesattnededorunattended", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditiongarages", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactiongaragesnumberpublicspaces: { targetcontrolname: "new_withactiongaragesnumberpublicspaces", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactiongaragesnumberaccessoryspaces: { targetcontrolname: "new_withactiongaragesnumberaccessoryspaces", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionconditiongarageshoursoperation: { targetcontrolname: "new_withactionconditiongarageshoursoperation", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactiongaragesattnededorunattended: { targetcontrolname: "new_withactiongaragesattnededorunattended", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditionlots:
        {
            0: {
                source: { sourcecontrolname: "new_existingconditionlots", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionlotsnumberpublicspace: { targetcontrolname: "new_existingconditionlotsnumberpublicspace", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditionlotsnumberaccessoryspace: { targetcontrolname: "new_existingconditionlotsnumberaccessoryspace", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditionlotshoursofoperation: { targetcontrolname: "new_existingconditionlotshoursofoperation", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionlots", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionlotsnumberpublicspace: { targetcontrolname: "new_existingconditionlotsnumberpublicspace", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditionlotsnumberaccessoryspace: { targetcontrolname: "new_existingconditionlotsnumberaccessoryspace", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditionlotshoursofoperation: { targetcontrolname: "new_existingconditionlotshoursofoperation", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditionlots: {
            0: {
                source: { sourcecontrolname: "new_noactionconditionlots", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionlotsnumberpublicspaces: { targetcontrolname: "new_noactionconditionlotsnumberpublicspaces", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditionlotsnumberaccessoryspace: { targetcontrolname: "new_noactionconditionlotsnumberaccessoryspace", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditionlotshoursofoperation: { targetcontrolname: "new_noactionconditionlotshoursofoperation", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionlots", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionlotsnumberpublicspaces: { targetcontrolname: "new_noactionconditionlotsnumberpublicspaces", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditionlotsnumberaccessoryspace: { targetcontrolname: "new_noactionconditionlotsnumberaccessoryspace", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditionlotshoursofoperation: { targetcontrolname: "new_noactionconditionlotshoursofoperation", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditionlots: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionlots", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionlotsnumberpublicspace: { targetcontrolname: "new_withactionconditionlotsnumberpublicspace", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionlotsnumberaccessoryspaces: { targetcontrolname: "new_withactionlotsnumberaccessoryspaces", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionconditionlotshoursofoperation: { targetcontrolname: "new_withactionconditionlotshoursofoperation", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionlots", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionlotsnumberpublicspace: { targetcontrolname: "new_withactionconditionlotsnumberpublicspace", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionlotsnumberaccessoryspaces: { targetcontrolname: "new_withactionlotsnumberaccessoryspaces", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionconditionlotshoursofoperation: { targetcontrolname: "new_withactionconditionlotshoursofoperation", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditionotherparking: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionotherparking", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionotherparkingdescription: { targetcontrolname: "new_existingconditionotherparkingdescription", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditionotherparkingdescription: { targetcontrolname: "new_noactionconditionotherparkingdescription", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionconditionotherparkingdescrbe: { targetcontrolname: "new_withactionconditionotherparkingdescrbe", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionotherparking", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionotherparkingdescription: { targetcontrolname: "new_existingconditionotherparkingdescription", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditionotherparkingdescription: { targetcontrolname: "new_noactionconditionotherparkingdescription", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionconditionotherparkingdescrbe: { targetcontrolname: "new_withactionconditionotherparkingdescrbe", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditionresidents: {
            0: {
                source: { sourcecontrolname: "new_existingconditionresidents", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionresidentsdescription: { targetcontrolname: "new_existingconditionresidentsdescription", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionresidents", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionresidentsdescription: { targetcontrolname: "new_existingconditionresidentsdescription", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_noactionconditionresidents: {
            0: {
                source: { sourcecontrolname: "new_noactionconditionresidents", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionresidentsdescription: { targetcontrolname: "new_noactionconditionresidentsdescription", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionresidents", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionresidentsdescription: { targetcontrolname: "new_noactionconditionresidentsdescription", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_withactionconditionresidents: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionresidents", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionresidentsdescription: { targetcontrolname: "new_withactionconditionresidentsdescription", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionresidents", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionresidentsdescription: { targetcontrolname: "new_withactionconditionresidentsdescription", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_existingconditionbusinesses: {
            0: {
                source: { sourcecontrolname: "new_existingconditionbusinesses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionbusinessnumberandtype: { targetcontrolname: "new_existingconditionbusinessnumberandtype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingbusinessnoandtypeofworkerbusiness: { targetcontrolname: "new_existingbusinessnoandtypeofworkerbusiness", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingbusinessnoandtypeofnonresidents: { targetcontrolname: "new_existingbusinessnoandtypeofnonresidents", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionbusinesses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionbusinessnumberandtype: { targetcontrolname: "new_existingconditionbusinessnumberandtype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingbusinessnoandtypeofworkerbusiness: { targetcontrolname: "new_existingbusinessnoandtypeofworkerbusiness", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingbusinessnoandtypeofnonresidents: { targetcontrolname: "new_existingbusinessnoandtypeofnonresidents", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_noactionconditionbusinesses: {
            0: {
                source: { sourcecontrolname: "new_noactionconditionbusinesses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionbusinessesnumberandtype: { targetcontrolname: "new_noactionconditionbusinessesnumberandtype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionbusinessnoandtypeofworkerbusiness: { targetcontrolname: "new_noactionbusinessnoandtypeofworkerbusiness", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionbusinessnoandtypeofnonresidents: { targetcontrolname: "new_noactionbusinessnoandtypeofnonresidents", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionbusinesses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionbusinessesnumberandtype: { targetcontrolname: "new_noactionconditionbusinessesnumberandtype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionbusinessnoandtypeofworkerbusiness: { targetcontrolname: "new_noactionbusinessnoandtypeofworkerbusiness", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionbusinessnoandtypeofnonresidents: { targetcontrolname: "new_noactionbusinessnoandtypeofnonresidents", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_withactionconditionbusinesses: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionbusinesses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionbusinessesnumberandtype: { targetcontrolname: "new_withactionbusinessesnumberandtype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionbusinessnoandtypeworkerbusiness: { targetcontrolname: "new_withactionbusinessnoandtypeworkerbusiness", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionbusinessnoandtypeofnonresident: { targetcontrolname: "new_withactionbusinessnoandtypeofnonresident", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionbusinesses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionbusinessesnumberandtype: { targetcontrolname: "new_withactionbusinessesnumberandtype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionbusinessnoandtypeworkerbusiness: { targetcontrolname: "new_withactionbusinessnoandtypeworkerbusiness", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionbusinessnoandtypeofnonresident: { targetcontrolname: "new_withactionbusinessnoandtypeofnonresident", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_existingconditionotherbusinesses: {
            0: {
                source: { sourcecontrolname: "new_existingconditionotherbusinesses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionotherbusinessdescription: { targetcontrolname: "new_existingconditionotherbusinessdescription", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionotherbusinesses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionotherbusinessdescription: { targetcontrolname: "new_existingconditionotherbusinessdescription", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_noactionconditionotherbusinesses: {
            0: {
                source: { sourcecontrolname: "new_noactionconditionotherbusinesses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionotherbusinessdescription: { targetcontrolname: "new_noactionconditionotherbusinessdescription", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionotherbusinesses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionotherbusinessdescription: { targetcontrolname: "new_noactionconditionotherbusinessdescription", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_withactionconditionotherbusinesses: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionotherbusinesses", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionotherbusinessdescribe: { targetcontrolname: "new_withactionconditionotherbusinessdescribe", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionotherbusinesses", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionotherbusinessdescribe: { targetcontrolname: "new_withactionconditionotherbusinessdescribe", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_existingconditionzoning: {
            0: {
                source: { sourcecontrolname: "new_existingconditionzoning", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionzoningclassification: { targetcontrolname: "new_existingconditionzoningclassification", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditionmaxfloorareadeveloped: { targetcontrolname: "new_existingconditionmaxfloorareadeveloped", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_existingconditionpredominantuse400ft: { targetcontrolname: "new_existingconditionpredominantuse400ft", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_existingconditionzoning", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_existingconditionzoningclassification: { targetcontrolname: "new_existingconditionzoningclassification", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditionmaxfloorareadeveloped: { targetcontrolname: "new_existingconditionmaxfloorareadeveloped", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_existingconditionpredominantuse400ft: { targetcontrolname: "new_existingconditionpredominantuse400ft", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_noactionconditionszoning: {
            0: {
                source: { sourcecontrolname: "new_noactionconditionszoning", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionzoningclassification: { targetcontrolname: "new_noactionconditionzoningclassification", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditionmaxfloorareadeveloped: { targetcontrolname: "new_noactionconditionmaxfloorareadeveloped", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_noactionconditionpredominantuse400ft: { targetcontrolname: "new_noactionconditionpredominantuse400ft", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_noactionconditionszoning", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_noactionconditionzoningclassification: { targetcontrolname: "new_noactionconditionzoningclassification", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditionmaxfloorareadeveloped: { targetcontrolname: "new_noactionconditionmaxfloorareadeveloped", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_noactionconditionpredominantuse400ft: { targetcontrolname: "new_noactionconditionpredominantuse400ft", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
        new_withactionconditionzoning: {
            0: {
                source: { sourcecontrolname: "new_withactionconditionzoning", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionzoningclassification: { targetcontrolname: "new_withactionconditionzoningclassification", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionconditionmaxfloorareadeveloped: { targetcontrolname: "new_withactionconditionmaxfloorareadeveloped", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_withactionconditionpredominantuse400ft: { targetcontrolname: "new_withactionconditionpredominantuse400ft", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_withactionconditionzoning", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_withactionconditionzoningclassification: { targetcontrolname: "new_withactionconditionzoningclassification", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionconditionmaxfloorareadeveloped: { targetcontrolname: "new_withactionconditionmaxfloorareadeveloped", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_withactionconditionpredominantuse400ft: { targetcontrolname: "new_withactionconditionpredominantuse400ft", isrequired: true, targetcontroltype: "string", isvisible: true }

                }
            }
        },
    },
    "shortform": {
        new_other:
        {
            0: {
                source: { sourcecontrolname: "new_other", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explain: { targetcontrolname: "new_explain", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_other", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explain: { targetcontrolname: "new_explain", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_hasanoactionscenariobeendefinedforproject:
        {
            0: {
                source: { sourcecontrolname: "new_hasanoactionscenariobeendefinedforproject", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_describebriefly: { targetcontrolname: "new_describebriefly", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_hasanoactionscenariobeendefinedforproject", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_describebriefly: { targetcontrolname: "new_describebriefly", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_seqratypei:
        {
            0: {
                source: { sourcecontrolname: "new_seqratypei", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_typeispecifycategory: { targetcontrolname: "new_typeispecifycategory", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_seqratypei", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_typeispecifycategory: { targetcontrolname: "new_typeispecifycategory", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_specialpermit: {
            0: {
                source: { sourcecontrolname: "new_specialpermit", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_specialpermittype: { targetcontrolname: "new_specialpermittype", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_specialpermitexpirationdate: { targetcontrolname: "new_specialpermitexpirationdate", isrequired: false, targetcontroltype: "datetime", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_specialpermit", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_specialpermittype: { targetcontrolname: "new_specialpermittype", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_specialpermitexpirationdate: { targetcontrolname: "new_specialpermitexpirationdate", isrequired: false, targetcontroltype: "datetime", isvisible: true }
                }
            }
        },
        new_boardofstandards:
        {
            0: {
                source: { sourcecontrolname: "new_boardofstandards", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsvarianceuse: { targetcontrolname: "new_boardofstandardsvarianceuse", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_boardofstandardsvariancebulk: { targetcontrolname: "new_boardofstandardsvariancebulk", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_boardofstandardsspecialpermit: { dependent: true, targetcontrolname: "new_boardofstandardsspecialpermit", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_boardofstandardsaffectedsection: { targetcontrolname: "new_boardofstandardsaffectedsection", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_boardofstandards", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsvarianceuse: { targetcontrolname: "new_boardofstandardsvarianceuse", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_boardofstandardsvariancebulk: { targetcontrolname: "new_boardofstandardsvariancebulk", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_boardofstandardsspecialpermit: { dependent: true, targetcontrolname: "new_boardofstandardsspecialpermit", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_boardofstandardsaffectedsection: { targetcontrolname: "new_boardofstandardsaffectedsection", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_boardofstandardsspecialpermit:
        {
            0: {
                source: { sourcecontrolname: "new_boardofstandardsspecialpermit", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsspecialpermittype: { targetcontrolname: "new_boardofstandardsspecialpermittype", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_boardofstandardsspecialpermit", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_boardofstandardsspecialpermittype: { targetcontrolname: "new_boardofstandardsspecialpermittype", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doe:
        {
            0: {
                source: { sourcecontrolname: "new_doe", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doespecifyiforotherspecify: { targetcontrolname: "new_doespecifyiforotherspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doe", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doespecifyiforotherspecify: { targetcontrolname: "new_doespecifyiforotherspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalsother:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalsother", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalsotherifyesspecify: { targetcontrolname: "new_doeotherapprovalsotherifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalsother", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalsotherifyesspecify: { targetcontrolname: "new_doeotherapprovalsotherifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalsfundingofconstruction:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingofconstruction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingofconstructionifyesspecify: { targetcontrolname: "new_doefundingofconstructionifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingofconstruction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingofconstructionifyesspecify: { targetcontrolname: "new_doefundingofconstructionifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalspolicyorplan:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalspolicyorplan", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspolicyorplanifyesspecify: { targetcontrolname: "new_doeotherapprovalspolicyorplanifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalspolicyorplan", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspolicyorplanifyesspecify: { targetcontrolname: "new_doeotherapprovalspolicyorplanifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalsfundingprograms:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingprograms", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingprogramsifyespecify: { targetcontrolname: "new_doefundingprogramsifyespecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalsfundingprograms", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doefundingprogramsifyespecify: { targetcontrolname: "new_doefundingprogramsifyespecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doeotherapprovalspermits:
        {
            0: {
                source: { sourcecontrolname: "new_doeotherapprovalspermits", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspoermitsifyesspecify: { targetcontrolname: "new_doeotherapprovalspoermitsifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doeotherapprovalspermits", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_doeotherapprovalspoermitsifyesspecify: { targetcontrolname: "new_doeotherapprovalspoermitsifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_othercityother:
        {
            0: {
                source: { sourcecontrolname: "new_othercityother", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_othercityotherifotherexplain: { targetcontrolname: "new_othercityotherifotherexplain", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_othercityother", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_othercityotherifotherexplain: { targetcontrolname: "new_othercityotherifotherexplain", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_stateorfederalaction:
        {
            0: {
                source: { sourcecontrolname: "new_stateorfederalaction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_stateorfederalspecificatioinifyesspecify: { targetcontrolname: "new_stateorfederalspecificatioinifyesspecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_stateorfederalaction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_stateorfederalspecificatioinifyesspecify: { targetcontrolname: "new_stateorfederalspecificatioinifyesspecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_involvesitezoningchanges:
        {
            0: {
                source: { sourcecontrolname: "new_involvesitezoningchanges", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_totalsqftownedcontrolledbyapplicantrange: { targetcontrolname: "new_totalsqftownedcontrolledbyapplicantrange", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_totalsqftnotownedcontrolledbyapplicant: { targetcontrolname: "new_totalsqftnotownedcontrolledbyapplicant", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_involvesitezoningchanges", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_totalsqftownedcontrolledbyapplicantrange: { targetcontrolname: "new_totalsqftownedcontrolledbyapplicantrange", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_totalsqftnotownedcontrolledbyapplicant: { targetcontrolname: "new_totalsqftnotownedcontrolledbyapplicant", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_doestheprojectinvolvedingroundexcavation:
        {
            0: {
                source: { sourcecontrolname: "new_doestheprojectinvolvedingroundexcavation", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_areaoftemporarydisturbancesqftrange: { targetcontrolname: "new_areaoftemporarydisturbancesqftrange", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_areaofpermanentdisturbancesqftrange: { targetcontrolname: "new_areaofpermanentdisturbancesqftrange", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_volumeofdisturbancecubftrange: { targetcontrolname: "new_volumeofdisturbancecubftrange", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doestheprojectinvolvedingroundexcavation", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_areaoftemporarydisturbancesqftrange: { targetcontrolname: "new_areaoftemporarydisturbancesqftrange", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_areaofpermanentdisturbancesqftrange: { targetcontrolname: "new_areaofpermanentdisturbancesqftrange", isrequired: true, targetcontroltype: "string", isvisible: true },
                    new_volumeofdisturbancecubftrange: { targetcontrolname: "new_volumeofdisturbancecubftrange", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectsinglephase:
        {
            0: {
                source: { sourcecontrolname: "new_projectsinglephase", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_ifmultiplehowmanyphases: { targetcontrolname: "new_ifmultiplehowmanyphases", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectsinglephase", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_ifmultiplehowmanyphases: { targetcontrolname: "new_ifmultiplehowmanyphases", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            }
        },
        new_landuseother:
        {
            0: {
                source: { sourcecontrolname: "new_landuseother", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_landuseotherpleasespecify: { targetcontrolname: "new_landuseotherpleasespecify", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_landuseother", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_landuseotherpleasespecify: { targetcontrolname: "new_landuseotherpleasespecify", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_proposedprojectresultchangeinlanduse:
        {
            0: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinlanduse", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_proposedprojectresultchangeinzoning" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinlanduse", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_proposedprojectresultchangeinzoning" }
                }
            }
        },
        new_proposedprojectresultchangeinzoning:
        {
            0: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinzoning", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_potentialtoaffectanapplicablepublicpolicy" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_proposedprojectresultchangeinzoning", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_potentialtoaffectanapplicablepublicpolicy" }
                }
            }
        },
        new_potentialtoaffectanapplicablepublicpolicy:
        {
            0: {
                source: { sourcecontrolname: "new_potentialtoaffectanapplicablepublicpolicy", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_proposedprojectresultchangeinlanduse" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_potentialtoaffectanapplicablepublicpolicy", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeapreliminaryassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeapreliminaryassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_proposedprojectresultchangeinlanduse" }
                }
            }
        },
        new_isprojectlargepubliclysponsoredproject:
        {
            0: {
                source: { sourcecontrolname: "new_isprojectlargepubliclysponsoredproject", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completeaplanycassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeaplanycassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isprojectlargepubliclysponsoredproject", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completeaplanycassessmentandattach: { resetrequired: false, targetcontrolname: "new_completeaplanycassessmentandattach", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_isanypartdirectlyaffectedareawithincity:
        {
            0: {
                source: { sourcecontrolname: "new_isanypartdirectlyaffectedareawithincity", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completetheconsistencyassessmentform: { resetrequired: false, targetcontrolname: "new_completetheconsistencyassessmentform", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isanypartdirectlyaffectedareawithincity", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completetheconsistencyassessmentform: { resetrequired: false, targetcontrolname: "new_completetheconsistencyassessmentform", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_generatenetincreaseofmorethan200resident:
        {
            0: {
                source: { sourcecontrolname: "new_generatenetincreaseofmorethan200resident", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_directlydisplace500ormoreresidents" },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_generatenetincreaseofmorethan200resident", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_directlydisplace500ormoreresidents" },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_directlydisplace500ormoreresidents:
        {
            0: {
                source: { sourcecontrolname: "new_directlydisplace500ormoreresidents", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_woulddisplacedresidentrepresentpopulation: {
                        dependent: true, targetcontrolname: "new_woulddisplacedresidentrepresentpopulation", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_generatenetincreaseofmorethan200resident"
                    }
                }
            },
            1: {
                source: { sourcecontrolname: "new_directlydisplace500ormoreresidents", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldaverageincomesofnewpopulationgreater: { dependent: true, targetcontrolname: "new_wouldaverageincomesofnewpopulationgreater", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_woulddisplacedresidentrepresentpopulation: { dependent: true, targetcontrolname: "new_woulddisplacedresidentrepresentpopulation", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_generatenetincreaseofmorethan200resident" }
                }
            }
        },
        new_directlydisplacemorethan100employees:
        {
            0: {
                source: { sourcecontrolname: "new_directlydisplacemorethan100employees", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_displacedbusinessesprovidegoodsorservices: { targetcontrolname: "new_displacedbusinessesprovidegoodsorservices", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_isanybusinesscategorybedisplaceregulation: { targetcontrolname: "new_isanybusinesscategorybedisplaceregulation", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_directlydisplacemorethan100employees", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectpotentiallyintroducetrends: { targetcontrolname: "new_wouldprojectpotentiallyintroducetrends", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectcaptureretailsalesparticular: { targetcontrolname: "new_wouldprojectcaptureretailsalesparticular", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_displacedbusinessesprovidegoodsorservices: { targetcontrolname: "new_displacedbusinessesprovidegoodsorservices", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_isanybusinesscategorybedisplaceregulation: { targetcontrolname: "new_isanybusinesscategorybedisplaceregulation", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_affectconditionsinaspecificindustry:
        {
            0: {
                source: { sourcecontrolname: "new_affectconditionsinaspecificindustry", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectsignificantlyaffectbusiness: { targetcontrolname: "new_wouldprojectsignificantlyaffectbusiness", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldprojectindirectlyreduceemployment: { targetcontrolname: "new_wouldprojectindirectlyreduceemployment", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_affectconditionsinaspecificindustry", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldprojectsignificantlyaffectbusiness: { targetcontrolname: "new_wouldprojectsignificantlyaffectbusiness", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldprojectindirectlyreduceemployment: { targetcontrolname: "new_wouldprojectindirectlyreduceemployment", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldaverageincomesofnewpopulationgreater:
        {
            0: {
                source: { sourcecontrolname: "new_wouldaverageincomesofnewpopulationgreater", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { dependent: true, targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby5", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldaverageincomesofnewpopulationgreater", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { dependent: true, targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby5", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldpopulationofprimaryareaincreaseby10:
        {
            0: {
                source: { sourcecontrolname: "new_wouldpopulationofprimaryareaincreaseby10", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldmorethan5percentunitsrenteroccupied: { targetcontrolname: "new_wouldmorethan5percentunitsrenteroccupied", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldpopulationofprimaryareaincreaseby10", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldmorethan5percentunitsrenteroccupied: { targetcontrolname: "new_wouldmorethan5percentunitsrenteroccupied", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_woulddisplacedresidentrepresentpopulation:
        {
            0: {
                source: { sourcecontrolname: "new_woulddisplacedresidentrepresentpopulation", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_isaverageincomeofdisplacedpopulationless: { dependent: true, targetcontrolname: "new_isaverageincomeofdisplacedpopulationless", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_woulddisplacedresidentrepresentpopulation", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_isaverageincomeofdisplacedpopulationless: { dependent: true, targetcontrolname: "new_isaverageincomeofdisplacedpopulationless", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_isaverageincomeofdisplacedpopulationless:
        {
            0: {
                source: { sourcecontrolname: "new_isaverageincomeofdisplacedpopulationless", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isaverageincomeofdisplacedpopulationless", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldpopulationofprimaryareaincreaseby10: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldpopulationofprimaryareaincreaseby5: { targetcontrolname: "new_wouldpopulationofprimaryareaincreaseby10", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultin20ormoreelibigblechildren:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultin20ormoreelibigblechildren", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultinacollectiveutilizationrate: { dependent: true, targetcontrolname: "new_projectresultinacollectiveutilizationrate", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultin20ormoreelibigblechildren", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultinacollectiveutilizationrate: { dependent: true, targetcontrolname: "new_projectresultinacollectiveutilizationrate", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultinacollectiveutilizationrate:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultinacollectiveutilizationrate", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectincreasethecollectiveutilizationra: { targetcontrolname: "new_projectincreasethecollectiveutilizationra", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultinacollectiveutilizationrate", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectincreasethecollectiveutilizationra: { targetcontrolname: "new_projectincreasethecollectiveutilizationra", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultina5percentormorein:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultina5percentormorein", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethestudy: { dependent: true, targetcontrolname: "new_wouldtheprojectincreasethestudy", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultina5percentormorein", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethestudy: { dependent: true, targetcontrolname: "new_wouldtheprojectincreasethestudy", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectincreasethestudy:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectincreasethestudy", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheadditionalpopulationimpair: { targetcontrolname: "new_wouldtheadditionalpopulationimpair", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectincreasethestudy", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheadditionalpopulationimpair: { targetcontrolname: "new_wouldtheadditionalpopulationimpair", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultin50ormoreelementary:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultin50ormoreelementary", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultinacollective: { dependent: true, targetcontrolname: "new_wouldtheprojectresultinacollective", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultin50ormoreelementary", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultinacollective: { dependent: true, targetcontrolname: "new_wouldtheprojectresultinacollective", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultinacollective:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultinacollective", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethiscollective: { targetcontrolname: "new_wouldtheprojectincreasethiscollective", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultinacollective", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectincreasethiscollective: { targetcontrolname: "new_wouldtheprojectincreasethiscollective", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectresultintheintroduction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectresultintheintroduction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationofhealth: { targetcontrolname: "new_wouldtheprojectaffecttheoperationofhealth", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectresultintheintroduction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationofhealth: { targetcontrolname: "new_wouldtheprojectaffecttheoperationofhealth", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_introductionofasizeablenewneighbour:
        {
            0: {
                source: { sourcecontrolname: "new_introductionofasizeablenewneighbour", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationoffire: { targetcontrolname: "new_wouldtheprojectaffecttheoperationoffire", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_introductionofasizeablenewneighbour", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectaffecttheoperationoffire: { targetcontrolname: "new_wouldtheprojectaffecttheoperationoffire", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_istheprojectlocatedwithinanunderserved:
        {
            0: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinanunderserved", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan50addition: { dependent: true, targetcontrolname: "new_wouldtheprojectgeneratemorethan50addition", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinanunderserved", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan50addition: { dependent: true, targetcontrolname: "new_wouldtheprojectgeneratemorethan50addition", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectgeneratemorethan50addition:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectgeneratemorethan50addition", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformation: { resetrequired: false, targetcontrolname: "new_attachsupportinginformation", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_ifinanunderservedareawouldtheproject: { targetcontrolname: "new_ifinanunderservedareawouldtheproject", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_ifinanareathatisnotunderservedwouldthe: { targetcontrolname: "new_ifinanareathatisnotunderservedwouldthe", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectgeneratemorethan50addition", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformation: { resetrequired: false, targetcontrolname: "new_attachsupportinginformation", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_ifinanunderservedareawouldtheproject: { targetcontrolname: "new_ifinanunderservedareawouldtheproject", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_ifinanareathatisnotunderservedwouldthe: { targetcontrolname: "new_ifinanareathatisnotunderservedwouldthe", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_istheprojectlocatedwithinawellserved:
        {
            0: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinawellserved", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan350: { targetcontrolname: "new_wouldtheprojectgeneratemorethan350", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_istheprojectlocatedwithinawellserved", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectgeneratemorethan350: { targetcontrolname: "new_wouldtheprojectgeneratemorethan350", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectresultinanet:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinanet", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_wouldtheproposedprojectresultinany" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinanet", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_wouldtheproposedprojectresultinany" }
                }
            }
        },
        new_wouldtheproposedprojectresultinany:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinany", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_wouldtheproposedprojectresultinanet" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinany", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_attachsupportinginformationexplaining: { resetrequired: false, targetcontrolname: "new_attachsupportinginformationexplaining", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_wouldtheproposedprojectresultinanet" }
                }
            }
        },
        new_doesprojectcontainarchitecturalresource:
        {
            0: {
                source: { sourcecontrolname: "new_doesprojectcontainarchitecturalresource", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_wouldproposedprojectinvolveconstruction" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doesprojectcontainarchitecturalresource", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_wouldproposedprojectinvolveconstruction" }
                }
            }
        },
        new_wouldproposedprojectinvolveconstruction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectinvolveconstruction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_doesprojectcontainarchitecturalresource" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectinvolveconstruction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_listanyidentifiedarchitecturalandresource: { targetcontrolname: "new_listanyidentifiedarchitecturalandresource", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_doesprojectcontainarchitecturalresource" }
                }
            }
        },
        new_wouldproposedprojectintroduceanewbuilding:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectintroduceanewbuilding", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: {
                        targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldproposedprojectresultinobstruction"
                    }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectintroduceanewbuilding", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: { targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldproposedprojectresultinobstruction" }
                }
            }
        },
        new_wouldproposedprojectresultinobstruction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultinobstruction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: { targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldproposedprojectintroduceanewbuilding" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultinobstruction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_pleaseprovidetheinformationrequestedincha: { targetcontrolname: "new_pleaseprovidetheinformationrequestedincha", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldproposedprojectintroduceanewbuilding" }
                }
            }
        },
        new_doestheprojectsitecontainnaturalresources:
        {
            0: {
                source: { sourcecontrolname: "new_doestheprojectsitecontainnaturalresources", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_listresourcesattachsupportinginformation: { targetcontrolname: "new_listresourcesattachsupportinginformation", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doestheprojectsitecontainnaturalresources", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_listresourcesattachsupportinginformation: { targetcontrolname: "new_listresourcesattachsupportinginformation", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_isaffectedareawithinjamaicabaywatershed:
        {
            0: {
                source: { sourcecontrolname: "new_isaffectedareawithinjamaicabaywatershed", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_completejamaicabaywatershedform: { resetrequired: false, targetcontrolname: "new_completejamaicabaywatershedform", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_isaffectedareawithinjamaicabaywatershed", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_completejamaicabaywatershedform: { resetrequired: false, targetcontrolname: "new_completejamaicabaywatershedform", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectinvolveconstructionofnew:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectinvolveconstructionofnew", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatepreliminaryanalysesa: { targetcontrolname: "new_conducttheappropriatepreliminaryanalysesa", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectinvolveconstructionofnew", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatepreliminaryanalysesa: { targetcontrolname: "new_conducttheappropriatepreliminaryanalysesa", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectinvolveareduction:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectinvolveareduction", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectcomplywiththecitys: { targetcontrolname: "new_wouldtheproposedprojectcomplywiththecitys", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectinvolveareduction", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectcomplywiththecitys: { targetcontrolname: "new_wouldtheproposedprojectcomplywiththecitys", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectexceedanythreshold:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectexceedanythreshold", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatescreeninganalysis: { targetcontrolname: "new_conducttheappropriatescreeninganalysis", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false },
                    new_wouldtheproposedprojectresultin50ormore: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultin50ormore", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_wouldtheproposedprojectresultinmorethan2: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultinmorethan2", isrequired: false, targetcontroltype: "string", isvisible: false },
                    new_projectresultsinmorethan200pedestriantrip: { dependent: true, targetcontrolname: "new_projectresultsinmorethan200pedestriantrip", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectexceedanythreshold", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriatescreeninganalysis: { targetcontrolname: "new_conducttheappropriatescreeninganalysis", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false },
                    new_wouldtheproposedprojectresultin50ormore: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultin50ormore", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_wouldtheproposedprojectresultinmorethan2: { dependent: true, targetcontrolname: "new_wouldtheproposedprojectresultinmorethan2", isrequired: false, targetcontroltype: "string", isvisible: true },
                    new_projectresultsinmorethan200pedestriantrip: { dependent: true, targetcontrolname: "new_projectresultsinmorethan200pedestriantrip", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectresultin50ormore:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultin50ormore", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_vehicletripsperprojectpeakhour: { targetcontrolname: "new_vehicletripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultin50ormore", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_vehicletripsperprojectpeakhour: { targetcontrolname: "new_vehicletripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectresultinmorethan2:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinmorethan2", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultperprojectpeakhour: { targetcontrolname: "new_projectresultperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectresultinmorethan2", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectresultperprojectpeakhour: { targetcontrolname: "new_projectresultperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultsinmorethan200pedestriantrip:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultsinmorethan200pedestriantrip", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_projectpedestriantripsperprojectpeakhour: { targetcontrolname: "new_projectpedestriantripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultsinmorethan200pedestriantrip", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_projectpedestriantripsperprojectpeakhour: { targetcontrolname: "new_projectpedestriantripsperprojectpeakhour", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectsitehaveexistinginstitutionalcont:
        {
            0: {
                source: { sourcecontrolname: "new_projectsitehaveexistinginstitutionalcont", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_projectresultinconditionoutlinedinsec220" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectsitehaveexistinginstitutionalcont", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: true, orwith: "new_projectresultinconditionoutlinedinsec220" }
                }
            }
        },
        new_wouldproposedprojectresultindevelopment:
        {
            0: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultindevelopment", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectrequireaghgemissions: { dependent: true, targetcontrolname: "new_wouldtheprojectrequireaghgemissions", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldproposedprojectresultindevelopment", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectrequireaghgemissions: { dependent: true, targetcontrolname: "new_wouldtheprojectrequireaghgemissions", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheprojectrequireaghgemissions:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheprojectrequireaghgemissions", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultininconsistencies: { targetcontrolname: "new_wouldtheprojectresultininconsistencies", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheprojectrequireaghgemissions", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheprojectresultininconsistencies: { targetcontrolname: "new_wouldtheprojectresultininconsistencies", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_wouldtheproposedprojectgenerateorreroute:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectgenerateorreroute", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldtheproposedprojectintroducenew" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectgenerateorreroute", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldtheproposedprojectintroducenew" }
                }
            }
        },
        new_wouldtheproposedprojectintroducenew:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectintroducenew", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_wouldtheproposedprojectcauseastationary" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectintroducenew", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_wouldtheproposedprojectcauseastationary" }
                }
            }
        },
        new_wouldtheproposedprojectcauseastationary:
        {
            0: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectcauseastationary", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: false, resetrequired: false, orwith: "new_doestheprojectsitehaveexistinginstitution" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_wouldtheproposedprojectcauseastationary", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", isvisible: true, resetrequired: false, orwith: "new_doestheprojectsitehaveexistinginstitution" }
                }
            }
        },
        new_doestheprojectsitehaveexistinginstitution:
        {
            0: {
                source: { sourcecontrolname: "new_doestheprojectsitehaveexistinginstitution", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", resetrequired: false, isvisible: false, orwith: "new_wouldtheproposedprojectgenerateorreroute" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_doestheprojectsitehaveexistinginstitution", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_conducttheappropriateanalysesandattach: { targetcontrolname: "new_conducttheappropriateanalysesandattach", isrequired: false, targetcontroltype: "string", resetrequired: false, isvisible: true, orwith: "new_wouldtheproposedprojectgenerateorreroute" }
                }
            }
        },
        new_baseduponanalysesconductedtechnical:
        {
            0: {
                source: { sourcecontrolname: "new_baseduponanalysesconductedtechnical", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofpublichealth: { targetcontrolname: "new_explainwhyanassessmentofpublichealth", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_baseduponanalysesconductedtechnical", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofpublichealth: { targetcontrolname: "new_explainwhyanassessmentofpublichealth", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_basedupontheanalysesconducted:
        {
            0: {
                source: { sourcecontrolname: "new_basedupontheanalysesconducted", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofneighborhood: { targetcontrolname: "new_explainwhyanassessmentofneighborhood", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_basedupontheanalysesconducted", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhyanassessmentofneighborhood: { targetcontrolname: "new_explainwhyanassessmentofneighborhood", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_constructionactivitieslastinglonger:
        {
            0: {
                source: { sourcecontrolname: "new_constructionactivitieslastinglonger", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructionactivitieswithinacentral" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructionactivitieslastinglonger", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructionactivitieswithinacentral" }
                }
            }
        },
        new_constructionactivitieswithinacentral:
        {
            0: {
                source: { sourcecontrolname: "new_constructionactivitieswithinacentral", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_closingnarrowingotherwiseimpedingtraffic" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructionactivitieswithinacentral", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_closingnarrowingotherwiseimpedingtraffic" }
                }
            }
        },
        new_closingnarrowingotherwiseimpedingtraffic:
        {
            0: {
                source: { sourcecontrolname: "new_closingnarrowingotherwiseimpedingtraffic", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructionofmultiplebuildings" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_closingnarrowingotherwiseimpedingtraffic", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructionofmultiplebuildings" }
                }
            }
        },
        new_constructionofmultiplebuildings:
        {
            0: {
                source: { sourcecontrolname: "new_constructionofmultiplebuildings", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_theoperationseveralpieceofdieselequipment" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructionofmultiplebuildings", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_theoperationseveralpieceofdieselequipment" }
                }
            }
        },
        new_theoperationseveralpieceofdieselequipment:
        {
            0: {
                source: { sourcecontrolname: "new_theoperationseveralpieceofdieselequipment", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_closureofacommunityfacilityordisruption" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_theoperationseveralpieceofdieselequipment", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_closureofacommunityfacilityordisruption" }
                }
            }
        },
        new_closureofacommunityfacilityordisruption:
        {
            0: {
                source: { sourcecontrolname: "new_closureofacommunityfacilityordisruption", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_activitieswithin400feetofahistoric" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_closureofacommunityfacilityordisruption", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_activitieswithin400feetofahistoric" }
                }
            }
        },
        new_activitieswithin400feetofahistoric:
        {
            0: {
                source: { sourcecontrolname: "new_activitieswithin400feetofahistoric", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_disturbanceofasitecontainingoradjacent" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_activitieswithin400feetofahistoric", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_disturbanceofasitecontainingoradjacent" }
                }
            }
        },
        new_disturbanceofasitecontainingoradjacent:
        {
            0: {
                source: { sourcecontrolname: "new_disturbanceofasitecontainingoradjacent", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructiononmultipledevelopmentsites" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_disturbanceofasitecontainingoradjacent", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructiononmultipledevelopmentsites" }
                }
            }
        },
        new_constructiononmultipledevelopmentsites:
        {
            0: {
                source: { sourcecontrolname: "new_constructiononmultipledevelopmentsites", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_constructionactivitieslastinglonger" }
                }
            },
            1: {
                source: { sourcecontrolname: "new_constructiononmultipledevelopmentsites", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhypreliminaryconstruction: { targetcontrolname: "new_explainwhypreliminaryconstruction", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_constructionactivitieslastinglonger" }
                }
            }
        },
        new_projectaspects:
        {
            0: {
                source: { sourcecontrolname: "new_projectaspects", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhetherprojecthavesignificant: { targetcontrolname: "new_explainwhetherprojecthavesignificant", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectaspects", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_explainwhetherprojecthavesignificant: { targetcontrolname: "new_explainwhetherprojecthavesignificant", isrequired: true, targetcontroltype: "string", isvisible: true }
                }
            }
        },
        new_projectresultinconditionoutlinedinsec220:
        {
            0: {
                source: { sourcecontrolname: "new_projectresultinconditionoutlinedinsec220", checkvalue: 0, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectexceedthethreshold: { targetcontrolname: "new_wouldtheproposedprojectexceedthethreshold", isrequired: false, targetcontroltype: "string", isvisible: false, orwith: "new_projectsitehaveexistinginstitutionalcont" },
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: false }
                }
            },
            1: {
                source: { sourcecontrolname: "new_projectresultinconditionoutlinedinsec220", checkvalue: 1, sourcecontroltype: "optionset" },
                target: {
                    new_wouldtheproposedprojectexceedthethreshold: { targetcontrolname: "new_wouldtheproposedprojectexceedthethreshold", isrequired: true, targetcontroltype: "string", isvisible: true, orwith: "new_projectsitehaveexistinginstitutionalcont" },
                    new_conductanalysisandattachsupportingdoc: { resetrequired: false, targetcontrolname: "new_conductanalysisandattachsupportingdoc", isrequired: false, targetcontroltype: "string", isvisible: true }
                }
            }
        }
    }
};
var TriggerPageLoad = function (processName) {
    //var processName = "ceqrlongform";
    console.log("ProcessName->" + processName);
    Common.BusinessRule.onLoad(processName);
};
$(document).ready(function () {
    if (window.location.href.indexOf("short-form") > -1) {
        TriggerPageLoad("shortform");
    }
    else if (window.location.href.indexOf("long-form") > -1) {
        TriggerPageLoad("longform");
    }
});