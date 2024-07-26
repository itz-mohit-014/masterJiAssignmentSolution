const batches = [
    {
        id:1,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:2,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:3,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    
    
    {
        id:4,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:5,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:6,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    
    {
        id:7,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:8,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:9,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:10,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    
    {
        id:11,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:12,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:13,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    
    {
        id:14,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:15,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    

    {
        id:16,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:17,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:18,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    {
        id:19,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:20,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:21,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    {
        id:22,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:123789,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:13903,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    {
        id:113,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:123,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:133,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },
    {
        id:131,
        title:"SQL Basics To Advanced Mastery Course",
        date:{
            start:"20 Jul 2024",
            end:"28 Jul 2024"
        },
        price:0,
        validity:"180",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__"
    },
    {
        id:1342,
        title:"30 Days Of Javascript Challenge",
        date:{
            start:"13 Jul 2024",
            end:"12 Aug 2024"
        },
        price:0,
        validity:"33",
        status:"Unpublished",
        thumbnail:"https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__"
    },
    {
        id:1233,
        title:"Interview Preparation With Javascript 2.0",
        date:{
            start:"02 Aug 2024",
            end:"15 Sep 2024"
        },
        price:10000,
        validity:"365",
        status:"Published",
        thumbnail:"https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"
    },

]

export default batches;