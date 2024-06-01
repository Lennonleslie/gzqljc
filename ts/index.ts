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

// 点击触发动画
const element = document.querySelector('.click1') as HTMLElement;

// 添加点击事件监听器
element.addEventListener('click', () => {
    element.classList.add('click1-clicked'); // 添加动画类
});

// 如果需要在点击后取消动画，可以添加一个额外的事件监听器
element.addEventListener('mouseleave', () => {
    element.classList.remove('click1-clicked'); // 移除动画类
});