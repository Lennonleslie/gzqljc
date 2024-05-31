// 点击切换网页链接
document.addEventListener('DOMContentLoaded', () => {
    const linkChangerButtons = document.querySelectorAll('.kjlli') as NodeListOf<HTMLButtonElement>;

    linkChangerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const iframe = document.getElementById('contentFrame') as HTMLIFrameElement;
            const url = button.dataset.url; // 使用dataset访问data-url属性

            if (url) {
                iframe.src = url;
            } else {
                console.error('Button missing data-url attribute');
            }
        });
    });
});