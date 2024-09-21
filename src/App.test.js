import request from 'supertest'
import app from '../server/server'
import { render, screen, fireEvent } from '@testing-library/react';
import Calc from './Calc';
describe("Tests", ()=>{
    describe("API Tests", () => {
        it("should add two numbers", async()=>{
            const response=await request(app).post("/add").type('form').send({
                num1:5,
                num2:3
            })
            console
            expect(response.statusCode).toBe(200)
            expect(response.body.result).toBe(8)
            expect(response.body.message).toBe('Addition successful')
        })
        it("should subtract two numbers", async()=>{
            const response=await request(app).post("/sub").type('form').send({
                num1:5,
                num2:3
            })
            expect(response.statusCode).toBe(200)
            expect(response.body.result).toBe(2)
            expect(response.body.message).toBe('Subtraction successful')
        })
    })
    describe("Calculator Frontend Tests", () => {
        it('renders the calculator component', () => {
            render(<Calc />);
            
            // Check if "Calculator" is rendered
            expect(screen.getByText(/Calculator/i)).toBeInTheDocument();
          });
        
          it('should update input fields and calculate addition', async () => {
            render(<Calc />);
            
            // Get input fields and buttons
            const num1Input = screen.getByLabelText('firstnumberbox');
            const num2Input = screen.getByLabelText('secondnumberbox');
            const addButton = screen.getByRole('button', { name: 'Add' });
        
            // Simulate user input
            fireEvent.change(num1Input, { target: { value: 5 } });
            fireEvent.change(num2Input, { target: { value: 3 } });
        
            // Simulate click on the "Add" button
            fireEvent.click(addButton);
        
            // Mock the fetch request here and check the result
            // Note: You may need to mock the API call using jest
            // Check if the result is displayed
            expect(await screen.findByText(/Results: 8/)).toBeInTheDocument();
          });

    })

})