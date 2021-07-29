// class Animal {
//     constructor(name){
//         this.name = name;
//         this.legs = true;
//         this.typeOfCat = "lion";
//     }

//     eat(){
//         console.log(" Animal eats by mouth >>", this.typeOfCat);
//         console.log("this >>", this);
//         console.log("this.typeOfCat",this.typeOfCat);
//         console.log("this.typeOfCat",this.hunting());
//     }
// }

// class Cat extends Animal{
//     constructor(type){
//         super()
//         this.typeOfCat = type;
//     }

//     hunting(){
//         console.log(" cats are hunting specialists. for example >>", this.typeOfCat);
//     }
// }

// const tigerOne = new Cat("Tiger");
// tigerOne.eat()


//////////////////////////////////////////////////////////////////////////////////////



const avengers = {
    operation: 'Assemble',
    members: [
      { ironMan: 'Tony Stark' },
      { captainAmerica: 'Steve Rogers' },
      { blackWidow: 'Natasha Romanoff' }
    ]
};

const {operation, members} = avengers;
console.log("members >>>>", members);

const [ , , thirdElem] = members;
console.log("thirdElem >>>", thirdElem);


///////////////




import styled from "styled-components"

export default function Footer() {
    return (
        <FooterSection>
            Copyright <span> &copy; </span> 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </FooterSection>
    )
}

const FooterSection = styled.footer`   
    height: 40px;
    background-color: #e8e6e6;
    padding: 8px 14% ;
    bottom: 0;
    font-weight : bold;   
    color : #4e4c4c; 
    bottom: 0;
    display: block;
    width : 100%;
    overflow : auto; 
`