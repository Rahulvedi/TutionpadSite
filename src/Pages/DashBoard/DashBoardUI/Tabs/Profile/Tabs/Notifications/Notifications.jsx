import React from 'react'
import { Details, Group, Heading, Input, Label, UpdateButton } from './NotificationsStyle';
const Notifications = () => {
    return (
        <>   
            <Heading>Notifications</Heading>
            <hr/>
 
            <Details>   
            <h4 className="mb-5">Email Notifications</h4>                      
                <Group>
                    <Input type="checkbox"/>
                    <Label> <b>General Reminders</b><br/>
                    Notifications about lessons, tutor messages, and payments.
                    </Label>
                </Group>
                <Group>
                    <Input type="checkbox"/>
                    <Label> <b>Updates, tips and offerss</b><br/>
                    Stay connected with product updates, helpful tips and special offers.
                    </Label>
                </Group>
                <Group>
                    <Input type="checkbox"/>
                    <Label> <b>Tuitionpad Blog</b><br/>
                    Occasional newsletter with the latest posts.
                    </Label>
                </Group>
                <Group>
                    <Input type="checkbox"/>
                    <Label> <b>Q & A section</b><br/>
                    Receive tutors’ replies to your questions.
                    </Label>
                </Group>                        
                <Group>
                    <Input type="checkbox"/>
                    <Label> <b>Lessons and messages</b><br/>
                    SMS alerts about tutors' first responses to your requests and trial lesson reminders.
                    </Label>
                </Group>                        
                <UpdateButton>Save Settings</UpdateButton>
            </Details>
        </>
    )
}

export default Notifications
