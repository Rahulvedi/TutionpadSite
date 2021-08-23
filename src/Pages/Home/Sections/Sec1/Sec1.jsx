import React from 'react'
import { Section, BannerImg,Content,TextWrapper,Title,SubTitle,SearchBarWrapper,Tabs,Tab,Input,Label,SearchBar,Group,SearchButton,Heading,PopularTab} from './Sec1Styles'
const Sec1 = () => {
    return (
        <Section>
            <BannerImg></BannerImg>
            <Content>
            <TextWrapper>
                <Title>Learn from the World’s Best tutors at your comfort</Title>
                <SubTitle>Every session is one-to-one and personalized to your subject and your question.</SubTitle>
            </TextWrapper>
            <SearchBarWrapper>
                <Tabs>
                    <Tab>
                        <input type='radio' id='TutionpadPrime' value='tutionpadprime' name='TeachersChoice'/>
                        <Label htmlFor='TutionpadPrime' style={{color:'white'}}>Tutionpad Prime</Label>
                    </Tab>
                    <Tab>
                        <input type='radio' id='OnlineTutors' value='onlinetutors' name='TeachersChoice'/>
                        <Label htmlFor='OnlineTutors' style={{color:'white'}}>Online Tutors</Label>
                    </Tab>
                    <Tab>
                        <input type='radio' id='HomeTutors' value='hometutors' name='TeachersChoice'/>
                        <Label htmlFor='HomeTutors' style={{color:'white'}}>Home Tutors</Label>
                    </Tab>
                   
                </Tabs>
                <SearchBar>
                    <Group>
                        <Label htmlFor='subject'>I want to learn</Label>
                        <Input id='subject'></Input>
                    </Group>
                    <Group>
                        <Label htmlFor='subject'>Country</Label>
                        <Input id='subject'></Input>
                    </Group>
                    <Group>
                        <Label htmlFor='subject'>Experience</Label>
                        <Input id='subject'></Input>
                    </Group>
                    <Group>
                        <Label htmlFor='subject'>Price Range</Label>
                        <Input id='subject'></Input>
                    </Group>
                    <SearchButton>Search</SearchButton>
                </SearchBar>
                <Tabs>
                    <Heading>Populars</Heading>
                    <PopularTab>Coding</PopularTab>
                    <PopularTab>Mathematics</PopularTab>
                    <PopularTab>Music</PopularTab>
                </Tabs>
            </SearchBarWrapper>
            </Content>
        </Section>
    )
}

export default Sec1
