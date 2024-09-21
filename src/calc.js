import React, { useState } from 'react';
import { Flex,Box,Button,NumberInput,NumberInputField} from '@chakra-ui/react'
function Calc() {
    const [num1, setFirstNumber] = useState('');
    const [num2, setSecondNumber] = useState('');
    const [result, setResult] = useState(0);
    
    function handleSubmit(e) {
        // Determine the operation
        fetch(`http://127.0.0.1:5000/${e}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                num1: (num1?num1:0),
                num2: (num2?num2:0),
            })
            
        })
        .then((response) =>response.json())
        .then((data) => {
            setResult(data.result);
            console.log("Success:", data);
            
        })
        .catch((error) => console.error("Error:", error));

    }
    // Send the POST request using fetch
    


    return (
        <>
        <Flex flexDirection={'column'} columnGap={'10'} bg={'white'}height={'50vh'} width={'30vh'} justifyContent={'space-evenly'}>
        <Box alignSelf={'center'} fontSize="xl" fontWeight="bold">Calculator</Box>          
        <Flex justifyContent={'center'}>
            <Box display="flex" alignItems="center" marginRight={'10px'}>First Number</Box>
            <NumberInput width="100px">
            <NumberInputField aria-label="firstnumberbox" value={num1} onChange={(e) => setFirstNumber((Number(e.target.value)))}/>
            </NumberInput>
        </Flex>
        <Flex justifyContent={'center'}>
            <Box display="flex" alignItems="center" marginRight={'10px'}>Second Number</Box>
            <NumberInput width="100px"> 
            <NumberInputField aria-label="secondnumberbox"  value={num2} onChange={(e) => setSecondNumber((Number(e.target.value)))}/>
            </NumberInput>
        </Flex>

        <Box>
            <Flex justifyContent={'center'}>
            <Box>Results: {result}</Box>
            </Flex>
        
        </Box>
        <Button colorScheme='blue' onClick={()=>handleSubmit('add')}>Add</Button>
        <Button colorScheme='red' onClick={()=>handleSubmit('sub')}>Subtract</Button>
        </Flex>

       
        </>
        
    )
}
export default Calc;