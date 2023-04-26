import { useEffect } from "react";
import { useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
    
    const observer = useRef() // это некоторая функция, которая отслеживает появление в зоне браузера 
    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            //console.log(target)
            
            if(target.isIntersecting) { // isIntersecting принимает true и объект в фоне видемости
                //console.log('intersected')
                callback()
            }
        }, options)
        observer.current.observe(childRef.current) // observe передаёт наблюдаемый child элемент в current

        return function() {
            observer.current.unobserve(childRef.current)
        }
    }, [callback])
} 