export const getUrl = async (url) => {
    let content = document.getElementById('content');
    let res = await fetch(`/tiktok/api.php?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    let { audio, video } = await res.json();
    
    let buttons = `
        <a href="${audio[0]}" target='_blank' class='btn'>Download Audio</a>
    `;
    let videoElement = `
        <video controls="" autoplay="" name="media">
            <source src="${video}" type="video/mp4"></source>
        </video>
    `;
    content.innerHTML = `${buttons} ${videoElement}`;
}
