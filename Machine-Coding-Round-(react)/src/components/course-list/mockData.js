const courses = [
    {
    id: '1',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
    title: 'Interview preparation with JavaScript 2.0',
    price: 9000,
    type: 'course'
    },
    {
    id: '2',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/c3f9/20d2/821eddba9e8b631df344253a088351ab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqcFLHVvgidt1zfj7iygAqioT7-77njX9HWzfJU9DtBvvupjabE1hwaUGOD6kbhzeA0zKVrm4wstNY5BtCQXZKKRsnRysVIT0pFZjLVySSs6va1WFLFwbUJYJWUh9R-A~aZHHkF0EdcA6BgTs7IGIVLda0HWnSlB8K1X0Jdx3pWoWc-LmgBoKM5POQQT6ezb4flHzZlmrkx7N2U~cwXgku-3uAecz4g6v2nF9WJBaGVOG7-rfMvIxPqkpSHOYHXL3lLBYNK4xX2PrF3gTTkmutrtwuK3va05zP28IDer1oINdgZ12mDWk5MXtUwYKRkhyIzj5xzKgzHebucWmGwD8Q__',
    title: 'Aptitude - Averages, Mixtures & Allegation',
    free: true,
    type: 'mock test'
    },
    {
    id: '3',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/afef/8de5/c31187fb55d09369df8e4601eeec5fd2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDbkDiV0eSOus6-edXr4oEjulWtSE4amgsn1X5G6r7XtXkxtXCJRcX3cLvRUj3kwYGpdH9M1gWlfueMCzVO6AcahucFVhQUWpxIWtrxAMV~QodvtygjrxUjvEh4Me~WXXnzaFn7wLb-7kWI~6WnbqRqnQzNuA1cH7L6UbKchveEphcUNp7YLuvssyfftoNQOlIBwjLkHrRHJ1D-Y9GmUj9kx5lF7xTzPGW7oHUiujHtxNc6SKQUN-ZJaEi86M~sTylYuy-DJfrHgEpcjYQgPYO4b23S4I9iPOLiCvcDt6C55XDVoJbPv24KaFwMWr5Y8XA6CzOg6VtDF1LUG-fxxow__',
    title: 'Aptitude - Simple & Compound Interest',
    free: true,
    type: 'mock test'
    },
    {
    id: '4',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/f133/cc0d/84f36f0a21c66518d4eac3eeb44f2f8e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGpbfvpY0JE709msje3x2KurfYNeJCHxS5rJZFhZ8lG63iXABbpiop4wBg-NGjTpPNLLQiWjZXykD1Hom2jU3NBq4oC30ElOm11no4VLhWfuEjZmrwxChIK8Sd1Mxsg0bvWN~8E5psytaZrmv~pjful4jfb9W8L9fdY-BzhO9djoz1X2tY-o3lb~bMWhcDa-1fs1wRtPrgJM80tEw1dbBZRwPa5xPxEJO3L42nQCyGaFJTDC9CqVVTA6M2wRXMJnTWSUljUJsSQZkYJslBrMQOjgAfxmv~gLpgMnui3rRNNdHBcR-l9zAqQgVz2g4IwJ1DjqqfiE9-1UVfscCpsxBw__',
    title: 'Aptitude - Partnership',
    free: true,
    type: 'mock test'
    },
    {
    id: '5',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/28ea/b2ec/2d421358776ee87940ffce6b249a9b58?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DiMvhQakfDaMgJ3AqJaUHtT~JQ0jGRb63rt6TYv0ibdsYLWMOjFzx-~ofCYawgFnhqpLMamRnaxnhGr9AA84AboKmp1OTQQ2aAEdsUP88Lw3RLx-bSuEBLCl7jslPyG1gFUSDc0j3dng6zv86xk9H1LMDzwPqSJz9NbCF4~q9mmBAAtslRczUAnR85N3XH9Yh8qKC2YmqVQKyIz1GWup7VAsWJSdjxJKbZn~hspK2Po8u8Lpo8lc48DacOvyT8CMGxhI1TA~vtm8YET5-lKNMRDsdSAvfbW6LSMqFSSCeqOBEUenXmSYwxKrZou-gSdAzeP28vPTv5KFMizz92J3KQ__',
    title: 'Aptitude - Time & Work',
    free: true,
    type: 'mock test'
    }
    ];

export default courses;