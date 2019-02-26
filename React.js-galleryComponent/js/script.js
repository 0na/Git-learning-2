"use script"

var GalleryItem = React.createClass({ //Przyjmuje się, że do zapisu klas zawsze stosujemy format UpperCase — dzięki temu prostemu zabiegowi jesteśmy w stanie odróżnić klasę od jej instancji.
    propTypes: {
        image: React.PropTypes.object.isRequired, //propTypes to obiekt, który określa, jakich właściwości możemy się spodziewać, i jakiego będą typu. Powyższy przykład zakłada, że będzie to jedna właściwość (image)
    },
    render: function () {
        return (
            React.createElement('div', {},
                React.createElement('h2', {}, this.props.image.name),
                React.createElement('img', {
                    src: this.props.image.src
                })
            )
        )
    },
});

var image = {
    name: 'Kotek',
    src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {
    image: image
});

ReactDOM.render(element, document.getElementById('app'));