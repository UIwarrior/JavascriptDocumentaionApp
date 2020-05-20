import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    Option,
    Button,
  } from '@bootstrap-styled/v4';

const FormComp = ({submit}) => {
    return  (
        <Form>
        <FormGroup>
          <Label htmlFor="inline-form-input">Title</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label hidden htmlFor="inline-form-input-group">Subtitle</Label>
          <InputGroup>
            <InputGroupAddon>Addon</InputGroupAddon>
            <Input type="text" className="form-control" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="inline-form-input">Description</Label>
        <textarea id="adnc" rows="4" cols="50" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inline-form-input">Link</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label check>
            <Input type="checkbox" /> Checkbox
          </Label>
        </FormGroup>
        <Button color="primary" type="submit" onClick={props.submit}>Submit</Button>
      </Form>
    )
}

export default FormComp;