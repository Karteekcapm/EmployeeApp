sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sample/firoiemployeeapp/test/integration/pages/EmployeeSetList",
	"com/sample/firoiemployeeapp/test/integration/pages/EmployeeSetObjectPage"
], function (JourneyRunner, EmployeeSetList, EmployeeSetObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sample/firoiemployeeapp') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeeSetList: EmployeeSetList,
			onTheEmployeeSetObjectPage: EmployeeSetObjectPage
        },
        async: true
    });

    return runner;
});

