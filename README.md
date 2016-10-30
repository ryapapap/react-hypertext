# react-hypertext

This is a couple React components to help with making hypertext. This is intended to be used for creative writing purposes.

## installation
```sh
npm install --save react-hypertext
```

## usage
```jsx
import { Stanza } from 'react-hypertext';

class FirstStanza extends Stanza {
  content = () => <div className="stanza">
    This is a section of writing.
    This is how you make a link: <this.link to={<SecondStanza />}>here</this.link>.
  </div>
}

class SecondStanza extends Stanza {
  content = () => <div className="stanza">
    The link would render this :)
  </div> 
}

...
ReactDOM.render(
  <FirstStanza />,
  document.getElementById('root')
);
```

That's it for now :)

## future changes

Eventually there should be a 'Restart' button on edges.
