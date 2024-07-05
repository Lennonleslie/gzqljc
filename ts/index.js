"use strict";
// 点击切换网页链接
document.addEventListener('DOMContentLoaded', () => {
    const linkChangerButtons = document.querySelectorAll('.kjllj');
    linkChangerButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const iframe = document.getElementById('contentFrame');
            const url = button.dataset.url; // 使用dataset访问data-url属性
            if (url) {
                iframe.src = url;
            }
            else {
                console.error('Button missing data-url attribute');
            }
        });
    });
});
// 地址菜单展开:给指定ID元素类进行改动
function dzaddClass() {
    let targetDiv = document.getElementById('dzcd');
    if (targetDiv) {
        targetDiv.classList.remove('none');
    }
    ;
    if (targetDiv) {
        targetDiv.classList.add('flex');
    }
    ;
    let targetDiv1 = document.getElementById('hxcd');
    if (targetDiv1) {
        targetDiv1.classList.remove('none');
    }
    ;
    if (targetDiv1) {
        targetDiv1.classList.add('flex');
    }
    ;
}
// 总返回:给指定ID元素类进行改动
function dzremoveClass() {
    let targetDiv = document.getElementById('dzcd');
    if (targetDiv) {
        targetDiv.classList.add('none');
    }
    ;
    if (targetDiv) {
        targetDiv.classList.remove('flex');
    }
    ;
    let targetDiv1 = document.getElementById('hxcd');
    if (targetDiv1) {
        targetDiv1.classList.add('none');
    }
    ;
    if (targetDiv1) {
        targetDiv1.classList.remove('flex');
    }
    ;
}
// 获取楼盘序号,切换为对应户型的DIV.并给这个户型的DIV添加一个显示的类(用于楼盘户型的显示切换)
// 全文加载完成才能运行这段函数.
document.addEventListener('DOMContentLoaded', function () {
    // 初始化第一个内容显示
    // document.getElementById('content1')?.classList.add('active-content'); // 使用可选链以避免潜在的null错误
    // 声明一个menuDivs变量，这个变量的值是获取所有楼盘地址按钮生成的一个NodeList数组。
    const menuDivs = document.querySelectorAll('.list1 button');
    // 在上述声明的menuDivs数组中，为每个按钮添加点击事件监听器
    menuDivs.forEach((button) => {
        // 当点击按钮时，执行以下代码
        button.addEventListener('click', function () {
            // 声明变量contentId,这个变量的id文本中,替换menu为content
            const contentId = this.id.replace('dz', 'hx');
            // 隐藏所有内容
            // 声明一个变量allContents,这个变量的值是获取所有class为content的元素生成的一个NodeList数组.
            const allContents = document.querySelectorAll('.none');
            // 循环遍历数组，隐藏所有内容
            allContents.forEach((content) => {
                content.classList.remove('flex');
            });
            // 显示对应的内容
            // 声明变量activeContent,初始化为全文中ID为contentId当前值的元素
            const activeContent = document.getElementById(contentId);
            // 如果存在这个元素，则添加active-content类
            if (activeContent) {
                activeContent.classList.add('flex');
            }
        });
    });
});
// 户型信息的替换实现
// 选取页面中所有 class 为 'list2' 下的 class 为 'kjllj' 的元素
document.querySelectorAll('.list2 button').forEach((button) => {
    // 确保当前元素是 HTML 元素，因为 TypeScript 认为它可能是更通用的 Element 类型
    if (button instanceof HTMLElement) {
        // 为每个符合条件的按钮添加点击事件监听器
        button.addEventListener('click', (event) => {
            // 获取按钮内的文本内容，准备复制
            const textToCopy = button.textContent;
            // 尝试选取页面中第一个 class 为 'hxxx' 的元素
            const houseTypeNameDiv = document.querySelector('.hxxx');
            // 检查是否成功选取到了该元素
            if (houseTypeNameDiv) {
                // 如果成功选取，将之前按钮中的文本内容设置为这个元素的文本内容
                // 如果 textToCopy 是 undefined 或者空字符串，就将其设为空字符串 ('未知户型')
                houseTypeNameDiv.textContent = textToCopy || '未知户型';
            }
            ;
        });
    }
});
// 选取页面中所有 class 为 'list2' 下的 button 元素(用于选中之后的菜单整体隐藏)
document.querySelectorAll('.list2 button').forEach((button) => {
    // 确保当前元素是 HTML 元素，以使用更具体的方法和属性
    if (button instanceof HTMLElement) {
        // 为每一个找到的 button 添加点击事件监听器
        button.addEventListener('click', (event) => {
            // 当按钮被点击时，调用 dzremoveClass 函数
            // 注意：dzremoveClass 函数应当已被正确定义并在作用域内可用
            // 这里假设 dzremoveClass 函数负责移除某个元素的 CSS 类，但具体实现未给出
            dzremoveClass();
        });
    }
});
