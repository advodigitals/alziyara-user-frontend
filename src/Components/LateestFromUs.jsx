import React from 'react'

const LateestFromUs = () => {

    const loadVideo = iframe => {

        const cid = "UC4P7fgvQinbOJDEJ9lluZWA"
        const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
        const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`
        fetch(reqURL)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                const videoNumber = iframe.getAttribute('vnum')
                const link = result.items[videoNumber].link;
                const id = link.substring(link.indexOf("=") + 1);
                iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`);
            })
            .catch(error => console.log('error', error));
    }
        const iframes = document.getElementsByClassName('latestVideoEmbed');
        for (let i = 0, len = iframes.length; i < len; i++) {
            loadVideo(iframes[i]);
    }
    return (

        <>
            <div className='gap-3'>
                <div className="cursor-pointer bg-red-500"> 
                    {/* <iframe class="latestVideoEmbed" vnum='0' width="600" height="340" frameborder="0" allowfullscreen></iframe> */}
                </div>

                <div className="cursor-pointer bg-orange-500"> 
                    <iframe class="latestVideoEmbed" vnum='1' width="600" height="340" frameborder="0" allowfullscreen></iframe>
                </div>

                <div className="cursor-pointer bg-amber-500">
                    <iframe class="latestVideoEmbed" vnum='2' width="600" height="340" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default LateestFromUs
