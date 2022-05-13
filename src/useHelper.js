
const useHelper = () => {

    //Section Scroll effect
    const scrollSection = (ref, posFromBottom) => {

        window.addEventListener('scroll', () => {
            const refScroll = ref.current.getBoundingClientRect().top - window.innerHeight + posFromBottom
            refScroll < 0 ? ref.current.classList.add('scrolled'): ref.current.classList.remove('scrolled')
        });
    }

    const paralxSection = (ref, movemultiple, offset) => {
        const refHeight = ref.current.offsetHeight;
        window.addEventListener('scroll', () => {
            const refScroll = ref.current.getBoundingClientRect().top - window.innerHeight
            const scrollVal = (window.pageYOffset * movemultiple) + offset;
            if ( refScroll < 0 ){
                ref.current.style.transform = `translateY(${-scrollVal}px)`;
                console.log(refHeight)
                ref.current.style.height = `${refHeight + scrollVal}px`;
            };
        });
    }

    return { scrollSection, paralxSection }
}

export default useHelper;