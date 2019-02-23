import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer'

test('Link chages the class when hovered', () => {
    const component = renderer.create(<Link page="http://www.google.com">Google</Link>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // onMouseEnter
    tree.props.onMouseEnter();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // onMouseLeave
    tree.props.onMouseLeave();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});