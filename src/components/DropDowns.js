import React, { useState } from 'react'

const DropDowns = () => {
    const [Catageory, setCatageory] = useState([
        'Select Catageory...',
        'Sports',
        'Food',
        'Education'
    ]);

    const sports = [
        'Adidas',
        'PUMA',
        'Nike',
        'Reebok',
        'Fila'
    ];

    const food = [
        'KFC',
        'McDonalds',
        'Pizza Hut',
        'Star Bucks',
        'Dominos',
        'Burger King'
    ];

    const education = [
        'BYJUS',
        'Coursera',
        'Udemy',
        'Code Academy'
    ];

    const defaultVal = ['First Select Catageory...'];

    const [drop1Val, setDrop1Val] = useState('Select Catageory...');

    const handleChange1 = (e) => {
        setDrop1Val(e.target.value);
    }

    let renderType1 = Catageory.map((type) => {
        return <option value={type}>{type}</option>
    })
    let renderType2;

    if (drop1Val === 'Sports') {
        renderType2 = sports.map((type) => {
            return <option value={type}>{type}</option>
        })
    }
    else if (drop1Val === 'Food') {
        renderType2 = food.map((type) => {
            return <option value={type}>{type}</option>
        })
    }
    else if (drop1Val === 'Education') {
        renderType2 = education.map((type) => {
            return <option value={type}>{type}</option>
        })
    }
    else {
        renderType2 = defaultVal.map((type) => {
            return <option value={type}>{type}</option>
        })
    }

    return (
        <div>
            <div className="section">
                <p>Select Catageory:</p>
                <select name="mainType" id="" value={drop1Val} onChange={handleChange1}>
                    {renderType1}
                </select>
            </div>
            <div className="section">
                <p>Select Sub Catageory:</p>
                <select name="mainType" id="">
                    {renderType2}
                </select>
            </div>
        </div>
    )
}

export default DropDowns
