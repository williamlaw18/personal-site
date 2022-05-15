
import React, {useEffect, useState} from 'react';

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

    const updateXY = (axis, value) => {

        const baseNum = 50
        const multiple = 5;
        let keyName;

        axis == 'x' ? keyName = 'xMove': keyName = 'yMove'
        setSettings(Object.assign({}, settings, {[keyName]: -(parseInt(value) - baseNum) / multiple}))
    }

    useEffect(() => {
        setParticles(settings)
    }, [settings])

    return(
        <section className='particleController'>
            <input id="xMove" type="range" onChange={(input) => updateXY('x', input.target.value)} />
            <input id="yMove" type="range" onChange={(input) => updateXY('y', input.target.value)} />
        </section>
    )


}

export default ParticleController;