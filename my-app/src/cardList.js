import Card from "./cardApp";
import React from 'react';

const testData = [
    {name: "Charles Lewis", avatar_url: "https://avatars0.githubusercontent.com/u/9028200?v=4", company: "@facebook"},
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
    <div>
        {testData.map(profile => <Card {...profile}/>)}
    </div>
)

export default CardList;
