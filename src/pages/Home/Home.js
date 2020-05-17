import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineFileAdd, AiOutlineRollback } from "react-icons/ai";
import If from "../../components/common/operator/If";
import MyTextArea from "../../components/MyTextArea/MyTextArea";
import {
  CustomToogle,
  ItemList,
  ProductList,
  SmallButton,
  ToogleBox,
} from "./Home_Styles";
import { connect } from "react-redux";
import * as actionsMessage from "../../store/modules/message/actions";
import { bindActionCreators } from "redux";
function Home({ message, listMessage }) {
  const [opened, setOpened] = useState(true);
  const [messages, setMessages] = useState([]);
  const [showTextArea, setShowTextArea] = useState(false);
  const [activeEventKey, setActiveEventKey] = useState(0);

  useEffect(() => {
    if (message.length === 0) {
      listMessage();
    }
  }, [0]);

  useEffect(() => {
    setMessages(message)
  }, [message])
  const ListComponente = () =>
    messages.map((item) => (
      <Card.Body key={item.id}>
        <ItemList>
          <div>{item.user}</div>
          <div>{item.date}</div>
        </ItemList>
        <div>{item.text}</div>
      </Card.Body>
    ));

  const collapseExit = (e) => {
    setOpened(false);
  };

  return (
    <ProductList>
      <Accordion eventkey={activeEventKey} onToggle={setActiveEventKey}>
        <Card>
          <ToogleBox>
            <CustomToogle>
              <Accordion.Toggle
                as={Card.Header}
                eventkey={activeEventKey}
                onClick={(e) => setOpened(!opened)}
              >
                List of Comment {message.length}
              </Accordion.Toggle>
            </CustomToogle>
            <If test={opened}>
              <SmallButton>
                <Button
                  variant={showTextArea ? "danger" : "primary"}
                  onClick={() => setShowTextArea(!showTextArea)}
                >
                  <If test={!showTextArea}>
                    <AiOutlineFileAdd />
                  </If>
                  <If test={showTextArea}>
                    <AiOutlineRollback />
                  </If>
                </Button>
              </SmallButton>
            </If>
          </ToogleBox>

          <If test={showTextArea}>
            <MyTextArea />
          </If>
          <Accordion.Collapse
            eventkey={activeEventKey}
            appear={showTextArea}
            onExit={collapseExit}
          >
            <ListComponente />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ProductList>
  );
}
const mapStateToProps = (state) => ({ message: state.message });

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsMessage.actionsMessage, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
