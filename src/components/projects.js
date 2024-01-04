import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./projectcard";
import colorSharp2 from "./media/color-sharp2.png";
import ticket from  "./media/ticket.png";
import game from  "./media/game.png";
export const Projects = () => {

    const projects = [
        {
            title: "Online Event Ticket System",
            description: "Design and Development",
            imgUrl: ticket,
        },
        {
            title: "Online Game Store",
            description: "Design and Development",
            imgUrl: game,
        },

    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here is some of my Projects</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" >
                            Tab Three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index)=> {
                                        return(
                                            <ProjectCard
                                             key={index}
                                             {...project}
                                             />
                                        )
                                    })
                                }

                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"></Tab.Pane>
                        <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>

        </section>

    )
}