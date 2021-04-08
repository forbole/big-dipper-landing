const getPrivacyDetails = () => {
  const definitions = [
    {
      topic: 'account',
    },
    {
      topic: 'company',
    },
    {
      topic: 'cookies',
    },
    {
      topic: 'country',
    },
    {
      topic: 'device',
    },
    {
      topic: 'personalData',
    },
    {
      topic: 'service',
    },
    {
      topic: 'serviceProvider',
    },
    {
      topic: 'third-partySocialMediaService',
    },
    {
      topic: 'usageData',
    },
    {
      topic: 'website',
    },
    {
      topic: 'you',
    },
  ];
  const trackingTechnologiesAndCookies = [
    {
      topic: 'cookiesOrBrowserCookies',
    },
    {
      topic: 'flashCookies',
    },
    {
      topic: 'webBeacons',
    },
  ];
  const trackingTechnologiesAndCookies2 = [
    {
      topic: 'necessaryEssentialCookies',
    },
    {
      topic: 'cookiesPolicyNoticeAcceptanceCookies',
    },
    {
      topic: 'functionalityCookies',
    },
    {
      topic: 'trackingAndPerformanceCookies',
    },
  ];
  const useOfYourPersonalData1 = [
    {
      topic: 'toProvideAndMaintainOurService',
    },
    {
      topic: 'toManageYourAccount',
    },
    {
      topic: 'forThePerformanceOfAContract',
    },
    {
      topic: 'toContactYou',
    },
    {
      topic: 'toProvideYou',
    },
    {
      topic: 'toManageYourRequest',
    },
    {
      topic: 'forBusinessTransfers',
    },
    {
      topic: 'forOtherPurpose',
    },
  ];
  const useOfYourPersonalData2 = [
    {
      topic: 'withServiceProviders',
    },
    {
      topic: 'forBusinessTransfer',
    },
    {
      topic: 'withAffliates',
    },
    {
      topic: 'withBusinessPartners',
    },
    {
      topic: 'withOtherUsers',
    },
    {
      topic: 'withYourAccount',
    },
  ];
  const otherDetailRequirement = [
    {
      topic: 'otherLegalRequirementsDetail1',
    },
    {
      topic: 'otherLegalRequirementsDetail2',
    },
    {
      topic: 'otherLegalRequirementsDetail3',
    },
    {
      topic: 'otherLegalRequirementsDetail4',
    },
    {
      topic: 'otherLegalRequirementsDetail5',
    },
  ];

  const analytics = [
    {
      topic: 'googleAnalytics',
    },
    {
      topic: 'matomo',
    },
  ];

  const usuage = [
    {
      topic: 'usageDataType',
    },
  ];

  const email = [
    {
      topic: 'byEmail',
    },
  ];

  return {
    definitions,
    trackingTechnologiesAndCookies,
    trackingTechnologiesAndCookies2,
    useOfYourPersonalData1,
    useOfYourPersonalData2,
    otherDetailRequirement,
    analytics,
    usuage,
    email,
  };
};

export default getPrivacyDetails;
