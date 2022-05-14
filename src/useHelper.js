
const useHelper = () => {

    //Section Scroll effect
    const scrollSection = (ref, posFromBottom) => {

        window.addEventListener('scroll', () => {
            const refScroll = ref.current.getBoundingClientRect().top - window.innerHeight + posFromBottom
            refScroll < 0 ? ref.current.classList.add('scrolled'): ref.current.classList.remove('scrolled')
        });
    }

    const paralxSection = (ref, movemultiple, offset = 0, height = false) => {
        
        const setScrollValues = (nodeHeight) => {
                
            if (ref.current != null){
                const refScroll = ref.current.getBoundingClientRect().top - window.innerHeight
                const scrollVal = (window.pageYOffset * movemultiple) + offset;
                if ( refScroll < 0 ){
                    ref.current.style.transform = `translateY(${-scrollVal}px)`;
                    if (height == true){
                        ref.current.style.height = `${nodeHeight + scrollVal}px`;
                    }
                };
            }
        }

        if (ref != null){
            const refHeight = ref.current.offsetHeight;
            setScrollValues(refHeight)
            window.addEventListener('scroll', () => setScrollValues(refHeight))
        }
    }

    return { scrollSection, paralxSection }
}

export default useHelper;