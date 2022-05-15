
import React, {useEffect, useState, useRef} from 'react';

const ParticleController = ({setParticles}) => {

    const [settings, setSettings] = useState({
        type: 'circle',
        rate: 500,
        colors: [],
        border: true,
        minRadius: 10,
        maxRadius: 100,
        xMove: 0,
        yMove: 0
    })

    const updateRate = (value) => {
        const multiple = 10;
        const output = ((parseInt(value)) * multiple);
        setSettings(Object.assign({}, settings, {['rate']: output}))
    }

    const updateXY = (axis, value) => {
        const baseNum = 50
        const multiple = 5;
        const output = -((parseInt(value) - baseNum) / multiple);
        let keyName;

        axis == 'x' ? keyName = 'xMove': keyName = 'yMove'
        setSettings(Object.assign({}, settings, {[keyName]: output}))
    }

    useEffect(() => {
        setParticles(settings)
    }, [settings])

    return(
        <section className='particleController'>
            <input id="xMove" type="range" onChange={(input) => updateXY('x', input.target.value)} />
            <input id="yMove" type="range" onChange={(input) => updateXY('y', input.target.value)} />
            <input id="rate" type="range" onChange={(input) => updateRate(input.target.value)} />
        </section>
    )


}

export default ParticleController;