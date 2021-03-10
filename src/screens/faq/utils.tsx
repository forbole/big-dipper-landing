const getFaqDetails = () => {
  const faq = [
    {
      topic: 'blockchain',
      questions: [
        {
          question: 'posQuestion',
          ans: 'posAnswer',
        },
        {
          question: 'inflationQuestion',
          ans: 'inflatinAnswer',
        },
      ],
    },
    {
      topic: 'delegators',
      questions: [
        {
          question: 'delegatorsQuestion',
          ans: 'delegatorsAnswer',
        },
        {
          question: 'stakingQuestion',
          ans: 'stakingAnswer',
        },
        {
          question: 'stakingRewardQuestion',
          ans: 'stakingRewardAnswer',
        },
        {
          question: 'stakingActionsQuestion',
          ans: 'stakingActionsAnswer',
        },
        {
          question: 'bondingQuestion',
          ans: 'bondingAnswer',
        },
      ],
    },
    {
      topic: 'validators',
      questions: [
        {
          question: 'delegateQuestion',
          ans: 'delegateAnswer',
        },
        {
          question: 'validatorsQuestion',
          ans: 'validatorsAnswer',
        },
        {
          question: 'validatorsEeigibilityQuestion',
          ans: 'validatorsEeigibilityAnswer',
        },
        {
          question: 'chooseValidatorQuestion',
          ans: 'chooseValidatorAnswer',
          details: [
            {
              content: 'chooseValidatorAnswerDetail1',
            },
            {
              content: 'chooseValidatorAnswerDetail2',
            },
            {
              content: 'chooseValidatorAnswerDetail3',
            },
            {
              content: 'chooseValidatorAnswerDetail4',
            },
            {
              content: 'chooseValidatorAnswerDetail5',
            },
            {
              content: 'chooseValidatorAnswerDetail6',
            },
          ],
          conclusion: 'chooseValidatorConclusion',
        },
      ],
    },
    {
      topic: 'governance',
      questions: [
        {
          question: 'proposalsQuestion',
          ans: 'proposalsAnswer',
        },
        {
          question: 'votingPowerQuestion',
          ans: 'votingPowerAnswer',
        },
        {
          question: 'votingQuestion',
          ans: 'votingAnswer',
        },
      ],
    },
  ];

  return faq;
};

export default getFaqDetails;
