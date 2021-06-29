import PropTypes from 'prop-types';
import noImage from '../../assets/no_image.jpg';

const Item = ({ item }) => {
  if (!item.MainImage) return null;

  const {
    url,
    title,
    MainImage,
    currency_code: currencyCode,
    price,
    quantity,
  } = item;

  const imgSrc = MainImage.url_570xN || noImage;

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  return (
    <li className="item">
      <div className="item-image">
        <a href={url}>
          <img src={imgSrc} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">
          {currencySymbols[currencyCode] || '£'}
          {price}
        </p>
        <p className="item-quantity level-medium">{quantity} left</p>
      </div>
    </li>
  );
};

// немного не понял прикола
// не хочется передавать каждый параметр в виде отдельного пропса,
// а иначе не знаю, как сделать дефолтные значения в данном случае

// Item.defaultProps = {
//   item: {
//     currency_code: 'GBP',
//   },
// };

Item.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string, // да, почему-то строки
    quantity: PropTypes.number,
  }),
};

export function Listing({ items }) {
  const itemList = items.map((item) => (
    <Item item={item} key={item.listing_id}></Item>
  ));
  return <ul className="item-list">{itemList}</ul>;
}

// Listing.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)),
// };
