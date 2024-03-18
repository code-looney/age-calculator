import React, { useState } from 'react';
import Container from './Container';
import Input from './Input';
import Icon from './Icon';
import Separation from './Separation';
import Label from './Label';
import Title from './Title';

const Calculator = () => {
    const [day, setDay] = useState('- -')
    const [month, setMonth] = useState('- -')
    const [year, setYear] = useState('- -')
  return (
    <Container className='w-full h-screen flex justify-center items-center outline'>
        <Container className={`outline flex flex-col items-center`}>
            <Container className={`flex`}>
                <Container className={`flex flex-col`}>
                    <Label>Day</Label>
                    <Input className={`outline`} placeholder={`DD`} />
                </Container>
                <Container className={`flex flex-col`}> 
                    <Label>Month</Label>
                    <Input className={`outline`} placeholder={`MM`} />
                </Container>
                <Container className={`flex flex-col`}>
                    <Label>Year</Label>
                    <Input className={`outline`} placeholder={`YY`} />
                </Container>
            </Container>
            <Container className={`w-full flex justify-end items-center`}>
                <Separation className={`w-[500px]`} />
                <Icon className={`bg-purple`} iconURL={`images/icon-arrow.svg`} />
            </Container>
            <Container className={`outline w-full`}>
                <Container className={`flex gap-2`}>
                    {day}
                    <Title>Years</Title>
                </Container>
                <Container className={`flex gap-2`}>
                    {month}
                    <Title>Months</Title>
                </Container>
                <Container className={`flex gap-2`}>
                    {year}
                    <Title>Days</Title>
                </Container>
            </Container>
        </Container>
    </Container>
  )
}

export default Calculator