import React, { Component } from "react";
import {
  Button,
  Grid,
  Col,
  Row,
  FormControl,
  InputGroup,
  Form,
  Alert
} from "react-bootstrap";

import shortid from "short-id";

class TestForm extends Component {
  state = {
    boxA: 2,
    boxB: 4,
    boxC: 6,
    result: "none",
    hypothesis: "",
    tries: 0,
    name: "",
    id: shortid.generate()
  };

  test = () => {
    console.log(this.state);

    this.submitStep();

    const match =
      Number.isInteger(this.state.boxA) &&
      Number.isInteger(this.state.boxB) &&
      Number.isInteger(this.state.boxC) &&
      Number(this.state.boxA) < Number(this.state.boxB) &&
      Number(this.state.boxB) < Number(this.state.boxC);
    const result = match ? "match" : "nomatch";
    this.setState({
      result,
      lastA: this.state.boxA,
      lastB: this.state.boxB,
      lastC: this.state.boxC,
      boxA: "",
      boxB: "",
      boxC: "",
      tries: this.state.tries + 1
    });
  };

  submitStep = () => {
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSeCt3LEcrhVWVtF-8p31ePjTGux1aFVgBHEFTDAXJIlWUwIDg/formResponse",
      {
        credentials: "include",
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded",
          pragma: "no-cache",
          "upgrade-insecure-requests": "1",
          "x-chrome-connected":
            "id=117493583830388096958,mode=0,enable_account_consistency=false",
          "x-client-data":
            "CIi2yQEIorbJAQjBtskBCKmdygEIqKPKAQjOp8oBCOenygEY+aXKAQ=="
        },
        referrer:
          "https://docs.google.com/forms/d/e/1FAIpQLSeCt3LEcrhVWVtF-8p31ePjTGux1aFVgBHEFTDAXJIlWUwIDg/viewform?fbzx=-38906850261899940",
        referrerPolicy: "no-referrer-when-downgrade",
        body: `entry.880831188=${this.state.id ||
          "none"}&entry.1829150637=${this.state.boxA ||
          "none"}&entry.180373689=${this.state.boxB ||
          "none"}&entry.245337569=${this.state.boxC ||
          "none"}&entry.1419804091=${this.state.result ||
          "none"}&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22-38906850261899932%22%5D%0D%0A&pageHistory=0&fbzx=-38906850261899932`,
        method: "POST",
        mode: "no-cors"
      }
    );

    // const body = `entry.880831188=${this.state.id ||
    // "none"}&entry.1829150637=${this.state.boxA ||
    // "none"}&entry.180373689=${this.state.boxB ||
    // "none"}&entry.245337569=${this.state.boxC ||
    // "none"}&entry.1419804091=${this.state.result ||
    // "none"}&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22-38906850261899932%22%5D%0D%0A&pageHistory=0&fbzx=-38906850261899932`;

    // console.log(`Going to send guess: ${body}`);

    // fetch(
    //   "https://docs.google.com/forms/d/e/1FAIpQLSeCt3LEcrhVWVtF-8p31ePjTGux1aFVgBHEFTDAXJIlWUwIDg/formResponse",
    //   {
    //     credentials: "include",
    //     headers: { "content-type": "application/x-www-form-urlencoded" },
    //     body: body,
    //     method: "POST",
    //     mode: "no-cors"
    //   }
    // );
  };

  submit = () => {
    if (false) {
      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdyNgVZTL2pdNhHx5giekx_NsDwUc-SHT7GFj0Rr_uY2cALxw/formResponse",
        {
          credentials: "include",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          body:
            "entry.1890596035=fishhhhh22222&entry.471044127=me&entry.799979349=123&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22-3621532999757089042%22%5D%0D%0A&pageHistory=0&fbzx=-3621532999757089042",
          method: "POST",
          mode: "no-cors"
        }
      );
    }

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdyNgVZTL2pdNhHx5giekx_NsDwUc-SHT7GFj0Rr_uY2cALxw/formResponse",
      {
        credentials: "include",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: `entry.1890596035=${this.state.hypothesis ||
          "none"}&entry.471044127=${this.state.name ||
          "none"}&entry.799979349=${this.state.id ||
          "none"}&fvv=1&draftResponse=%5Bnull%2Cnull%2C%22-3621532999757089042%22%5D%0D%0A&pageHistory=0&fbzx=-3621532999757089042`,
        method: "POST",
        mode: "no-cors"
      }
    );

    this.props.onDone();
  };

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={2} />
          <Col md={8}>
            <div>
              This is a game based on a famous experiment called the 2-4-6 task,
              and this is how it works. I have a rule - known to me, but not to
              you - which fits some triplets of three numbers, but not others.
              2-4-6 is one example of a triplet which fits the rule.
            </div>
            <Form componentClass="fieldset" inline>
              <div>
                <FormControl
                  type="text"
                  value={this.state.boxA}
                  placeholder="First number"
                  onChange={({ target }) =>
                    this.setState({ boxA: target.value })
                  }
                />
                <FormControl
                  type="text"
                  value={this.state.boxB}
                  placeholder="Second number"
                  onChange={({ target }) =>
                    this.setState({ boxB: target.value })
                  }
                />
                <FormControl
                  type="text"
                  value={this.state.boxC}
                  placeholder="Third number"
                  onChange={({ target }) =>
                    this.setState({ boxC: target.value })
                  }
                />
              </div>
              <div>
                <Button onClick={this.test}>Try</Button>
              </div>
              <div>
                {this.state.result === "match" && (
                  <div id="match">
                    <Alert bsStyle="success">
                      <strong>
                        The triad {this.state.lastA}, {this.state.lastB},{" "}
                        {this.state.lastC} matches!
                      </strong>{" "}
                      Try another or type your hypothesis
                    </Alert>
                  </div>
                )}
                {this.state.result === "nomatch" && (
                  <div id="nomatch">
                    <Alert bsStyle="warning">
                      <strong>
                        The triad {this.state.lastA}, {this.state.lastB},{" "}
                        {this.state.lastC} doesn't match!
                      </strong>{" "}
                      Try another or type your hypothesis
                    </Alert>
                  </div>
                )}
              </div>
            </Form>
            <br />
            {this.state.tries > 0 && (
              <div>
                <div>
                  When you've performed all the further experimental tests you
                  want - asked me as many triplets as you feel necessary - you
                  stop and guess the rule:
                </div>
                <Form componentClass="fieldset" inline>
                  <FormControl
                    type="text"
                    value={this.state.hypothesis}
                    placeholder="The rule is:"
                    onChange={({ target }) =>
                      this.setState({ hypothesis: target.value })
                    }
                    style={{ width: "100%" }}
                  />
                  <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Name (optional)"
                    onChange={({ target }) =>
                      this.setState({ name: target.value })
                    }
                    style={{ width: "100%" }}
                  />
                  <div>
                    <Button onClick={this.submit}>Done</Button>
                  </div>
                </Form>
              </div>
            )}
          </Col>
          <Col md={2} />
        </Row>
      </Grid>
    );
  }
}

export default TestForm;
