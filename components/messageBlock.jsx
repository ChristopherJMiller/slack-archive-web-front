import {
  Media,
  Row,
  Col,
  Container
} from 'react-bootstrap'

function MessageBlock(props) {
  const processMessages = (messages) => {
    let result = []
    for (let i in messages) {
      let message = messages[i]
      let continuedMessage = {
        message: message.message,
        timestamp: message.timestamp
      }
      if (result.length > 0 && result[result.length - 1].sender === message.sender) {
        result[result.length - 1].messages.unshift(continuedMessage)
      } else {
        result.push({
          sender: message.sender,
          icon: message.icon,
          messages: [continuedMessage]
        })
      }
      console.log(message)
    }
    return result
  }
  let processed = processMessages(props.messages.reverse())
  console.log(processed)
  const messages = processed.map((message, index) => {
    return (
      <Container fluid>
        <Row key={1} className={`hover-item-${props.theme}`}>
          <Col md={1} sm={2} xs={0} className='d-none d-sm-block'>
            <img
              className='img-fluid'
              src={message.icon}
              alt={message.sender}
            />
          </Col>
          <Col xs className='pl-0'>
            <h5 className={`text-color-${props.theme} mb-2`}>{message.sender}</h5>
            <p className={`text-color-${props.theme} my-1`}>
              {message.messages[0].message}
            </p>
          </Col>
        </Row>
        <Row className={`mb-1 hover-item-${props.theme}`}>
          <Col md={{ offset: 1 }} sm={{ offset: 2 }} className='pl-0'>
            {
              message.messages.slice(1, message.messages.length).map((singleMessage, index) => (
                <p className={`text-color-${props.theme} my-1`}>
                  {singleMessage.message}
                </p>
              ))
            }
          </Col>
        </Row>
      </Container>
    )
  })
  return (
    <div className='d-flex flex-column-reverse h-100'>
      {messages}
    </div>
  )
}

export default MessageBlock