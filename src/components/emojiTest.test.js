import {render,screen,fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";


describe("Testing Emoji",() =>{
   
    beforeEach(() => {
        render(<App></App>)
        
    });

    test('Header rendered check ', () => { 
        const header = screen.getByText(/Emoji Search/i);
        expect(header).toBeInTheDocument();
     });

     test("Emoji list Rendered successfully", ()=>{
        const items = screen.getAllByText(/click to copy emoji/i)
        expect(items.length).toEqual(20);
     });

     test("Emoji filtering is  working", ()=>{
        const emoji = "Joy";
        const input = screen.getByTitle("input");
        fireEvent.change(input, {target: {value: emoji}});
        expect(screen.getByText(emoji)).toBeInTheDocument

     });

     test("Copy emoji is working", () => {
      let list = screen.getByText(/grimacing/i);
      let text = "Grimacing";
      userEvent.click(list);
      
      expect(list).toHaveTextContent(text);
      
     })
})