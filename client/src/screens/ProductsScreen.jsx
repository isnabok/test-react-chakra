import { Center, Wrap, WrapItem } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { products } from '../products';

const ProductsScreen = () => {
  return (
    <Wrap spacing="15px" justify="center" minHeight="100vh">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w="320px" h="600px">
            <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductsScreen;
