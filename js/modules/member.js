export function initMember() {
    const membersContainer = document.querySelector('.members_items_container');
    const membersContainerWidth = membersContainer.offsetWidth;
    const membersItem = document.querySelectorAll('.members_item');
    const membersItemWidth = membersItem[0].offsetWidth;
    const totalWidth = membersItemWidth * membersItem.length;
    const scrollableWidth = totalWidth - membersContainerWidth;

    const blackLine = document.querySelector('.members_indicator_dot_line-black');
    const grayLine = document.querySelector('.members_indicator_dot_line-gray');

    // スクロール位置の割合を計算する関数
    const getScrollPercentage = () => {
        const currentScroll = membersContainer.scrollLeft;
        const percentage = (currentScroll / scrollableWidth) * 100;
        return Math.min(Math.max(percentage, 0), 100); // 0-100%の範囲に制限
    };

    // スクロールイベントの監視
    membersContainer.addEventListener('scroll', () => {
        const percentage = getScrollPercentage();
        console.log(percentage);

        blackLine.style.width = `${percentage}%`;
    });
}


