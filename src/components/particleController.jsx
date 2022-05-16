
import React, {useEffect, useState, useRef} from 'react';

import '../styles/components/particleController.scss';

const ParticleController = ({setParticles}) => {

    const [settings, setSettings] = useState({
        type: 'circle',
        rate: 150,
        fadeSpeed: 0.25,
        colors: [],
        border: true,
        minRadius: 10,
        maxRadius: 100,
        xMove: 0,
        yMove: 0
    })

    const updateRate = (value) => {
        const multiple = 3;
        const output = (((100 * multiple) - (parseInt(value)) * multiple));
        setSettings(Object.assign({}, settings, {['rate']: output}))
    }

    const updateFadeSpeed = (value) => {
        const multiple = 50;
        const output = ((parseInt(value)) / multiple);
        setSettings(Object.assign({}, settings, {['fadeSpeed']: output}))
    }

    const updateXY = (axis, value) => {
        const baseNum = 50
        const multiple = 5;
        const output = -((parseInt(value) - baseNum) / multiple);
        let keyName;

        axis == 'x' ? keyName = 'xMove': keyName = 'yMove'
        setSettings(Object.assign({}, settings, {[keyName]: output}))
    }

    const updateMinMax = (size, value) => {
        const multiple = 2;
        const output = (parseInt(value) * multiple);
        let keyName;
        size == 'max' ? keyName = 'maxRadius': keyName = 'minRadius'
        setSettings(Object.assign({}, settings, {[keyName]: output}))
    }  

    const [typeChecked, setTypeChecked] = useState('circle');
    const updateType = (value) => {
        setTypeChecked(value);
        setSettings(Object.assign({}, settings, {['type']: value}))
    }

    const [borderChecked, setBorderChecked] = useState(true);
    const updateBorder = (value) => {
        setBorderChecked(value)
        setSettings(Object.assign({}, settings, {['border']: value})) 
    }

    const [colorList, setColorList] = useState([]);
    const colors = useRef([]);
    const [colorID, setColorID] = useState(0);
    const [colorWheel, setColorWheel] = useState('#FFFFFF');
    const addColor = (value) => {
        const color = {
            id: colorID,
            color: colorWheel
        }
        colors.current = [...colorList, color]
        setColorList([...colorList, color])
        setColorID(colorID + 1);
        setColorWheel('#FFFFFF');
        updateColors(colors.current)
    }

    const removeColor = (value) => {
        const filterColor = (colorList.filter((color) => color.id != value.id));
        setColorList(filterColor);
        colors.current = filterColor;
        updateColors(colors.current)
    }
    
    const updateColors = (value) => {
        const sanitizedColors = value.map((item) => {
            return(item.color)
        })
        console.log(sanitizedColors);
        setSettings(Object.assign({}, settings, {['colors']: sanitizedColors}))
    }

    useEffect(() => {
        setParticles(settings)
    }, [settings])

    return(
        <section className='particleController'>
            <ul className='particleController__inputwrapper'>
                <li className='particleController__buttons'>
                    <div className='particleController__button'>
                        <input id="border" type="checkbox" checked={borderChecked} onChange={(input) => updateBorder(input.target.checked)} />
                        <label htmlFor="border">Border</label>
                    </div>
                    <div className='particleController__radio' onChange={(input) => updateType(input.target.value)}>
                        <div className='particleController__button'>
                            <input id="circle" type="radio" checked={typeChecked == 'circle' ?? true} name="obj-type" value="circle" onChange={(input) => updateType(input.target.value)}/>
                            <label htmlFor="circle">Circle</label>
                        </div>
                        <div className='particleController__button'>
                            <input id="hexagon" type="radio" name="obj-type" checked={typeChecked == 'hex' ?? true} value="hex" onChange={(input) => updateType(input.target.value)}/>
                            <label htmlFor="hexagon">Hexagon</label>
                        </div>
                    </div>
                </li>
                <li className='particleController__input'>
                    <input id="xMove" type="range" onChange={(input) => updateXY('x', input.target.value)} />
                    <label htmlFor="xMove">X Axis Velocity</label>
                </li>
                <li className='particleController__input'>
                    <input id="yMove" type="range" onChange={(input) => updateXY('y', input.target.value)} />
                    <label htmlFor="yMove">Y Axis Velocity</label>
                </li>
                <li className='particleController__input'>
                    <input id="rate" type="range" onChange={(input) => updateRate(input.target.value)} />
                    <label htmlFor="rate">Rate of Appearance</label>
                </li>
                <li className='particleController__input'>
                    <input id="fadeSpeed" type="range" onChange={(input) => updateFadeSpeed(input.target.value)} />
                    <label htmlFor="maxSize">Fade Speed</label>
                </li>
                <li className='particleController__input'>
                    <input id="maxSize" type="range" onChange={(input) => updateMinMax('max', input.target.value)} />
                    <label htmlFor="maxSize">Max Size</label>
                </li>
                <li className='particleController__input'>
                    <input id="minSize" type="range" onChange={(input) => updateMinMax('min', input.target.value)} />
                    <label htmlFor="minSize">Min Size</label>
                </li>

                <li className='particleController__color'>
                    <div className='particleController__color--button'>
                        <input type="color" value={colorWheel} onChange={(input) => setColorWheel(input.target.value)} />
                        <button onClick={() => addColor()}>Add colour +</button>
                    </div>
                    <ul id="colors">
                        {colorList.map((item, i) => {
                            return(
                                <li key={i} className='particleController__color--item'>
                                    <label htmlFor={`color-${item.color}-${item.id}`} style={{backgroundColor: item.color}}>Remove</label>
                                    <input type={'button'} id={`color-${item.color}-${item.id}`} value={item.color} onClick={() => removeColor(item)}/>
                                </li>
                            )
                        })}
                    </ul>
                </li>

            </ul>
        </section>
    )


}

export default ParticleController;