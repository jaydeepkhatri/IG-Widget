class InstagramWidget {
    constructor() {
        this.url = `https://instagramwidget.herokuapp.com/`;
        this.username = null;
        // this.theme = null;
        // this.postLineCount = null;
        this.iframeCSS =
            `
            border: 0;
            max-width: 400px;
            width: 100%;
            height: 467px;
            border: 2px solid red;
            max-height: 467px;
        `
    }


    init(data) {

        if (data.username) {
            this.username = data.username
        }



        const El = document.createElement("iframe");
        El.style.cssText = this.iframeCSS;
        El.src = `${this.url}${this.username}`;

        el.appendChild(El);
        console.log(this.username);

        El.addEventListener("load", (e) => {
            console.log(e.target.contentWindow.document.body.scrollHeight);
        });
    }
}