import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faHeadset, faGem, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const Feature = () => {
  return (
    <div className="grid grid-cols-4 justify-center   mx-32 space-x-8 py-8 ">
      <div className="text-center border h-32">
        <div className="flex justify-center items-center mt-5 mb-5 ">
        <FontAwesomeIcon icon={faShippingFast} size="2x" className="text-gray-600 mb-2" />
        </div>
        <p className="text-sm font-medium text-gray-600">FASTEST SHIPPING COUNTRYWIDE</p>
      </div>
      <div className="text-center border h-32">
              <div className="flex justify-center mt-5 mb-5">
              <FontAwesomeIcon icon={faUndoAlt} size="2x" className="text-gray-600 mb-2" />
        
        </div>
        <p className="text-sm font-medium text-gray-600">EASY RETURN POLICY</p>
      </div>
      <div className="text-center border h-32">
        <div className="flex justify-center mt-5 mb-5">
        <FontAwesomeIcon icon={faGem} size="2x" className="text-gray-600 mb-2" />
        </div>
        <p className="text-sm font-medium text-gray-600">PREMIUM QUALITY PRODUCT</p>
      </div>
      <div className="text-center border h-32">
        <div className="flex justify-center mt-5 mb-5">
        <FontAwesomeIcon icon={faHeadset} size="2x" className="text-gray-600 mb-2" />
        </div>
        <p className="text-sm font-medium text-gray-600">ONLINE SUPPORT 24/7</p>
      </div>
    </div>
  );
};

export default Feature;
