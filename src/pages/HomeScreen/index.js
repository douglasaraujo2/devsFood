import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import Header from "../../components/Header";
import CategoryItem from "../../components/CategoryItem";
import ProductItem from "../../components/ProductItem";

import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from "./styles";

import api from "../../api";
import Modal from "../../components/Modal";
import ModalProduct from "../../components/ModalProduct";
import ModalAddress from "../../components/ModalAddress";

let searchTimer = null;
export default () => {
  // const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [activeCategory, setActiveCategory] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [activeSearch, setActiveSearch] = useState("");

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});
  const [addressModalStatus, setAddressModalStatus] = useState(false);

  const getProducts = async (activeCategory, activePage, activeSearch) => {
    const prods = await api.getProducts(activeCategory, activePage, activeSearch);
    if (!prods.error) {
      setProducts(prods.result.data);
      setTotalPages(prods.result.pages);
    }
  };
  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 2000);
  }, [headerSearch]);
  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories();
      if (!cat.error) {
        setCategories(cat.result);
        ReactTooltip.rebuild();
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    setProducts([]);
    getProducts(activeCategory, activePage, activeSearch);
  }, [activeCategory, activePage, activeSearch]);
  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  }
  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <CategoryArea>
          Selecione uma categoria
          <CategoryList>
            <CategoryItem
              data={{
                id: "",
                name: "Todas as categories",
                image: "/assets/food-and-restaurant.png",
              }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {categories.map((category, index) => {
              return (
                <CategoryItem
                  key={index}
                  data={category}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              );
            })}
          </CategoryList>
        </CategoryArea>
      )}
      {products.length > 0 && (
        <ProductArea>
          <ProductList>
            {products.map((product, index) => {
              return (
                <ProductItem
                  key={index}
                  data={product}
                  onClick={handleProductClick} />)
            })}
          </ProductList>
        </ProductArea>
      )}
      {totalPages > 0 && (
        <ProductPaginationArea>
          {Array(totalPages)
            .fill(0)
            .map((item, index) => {
              return (
                <ProductPaginationItem
                  key={index}
                  active={activePage}
                  current={index + 1}
                  onClick={() => setActivePage(index + 1)}
                >
                  {index + 1}
                </ProductPaginationItem>
              );
            })}
        </ProductPaginationArea>
      )}
      <Modal
        status={modalStatus}
        setStatus={setModalStatus}>
        <ModalProduct data={modalData} setStatus={setModalStatus} />
      </Modal>
      <Modal status={addressModalStatus}
        setStatus={setAddressModalStatus}>
        <ModalAddress />

      </Modal>
    </Container>
  );
};
