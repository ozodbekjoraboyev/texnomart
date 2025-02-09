import axios from "axios";
import React, { useEffect, useState } from "react";
import sertsa1 from "../../assets/sertsa1.svg";
import sertsa2 from "../../assets/sertsa2.svg";
import ShoppingCart02Icon from "../../assets/ikonkalar/Shoping";
import { Button, Skeleton, message, Result } from "antd";

function Cardlar({ setSavatcha }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sevimlilar, setSevimlilar] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
      )
      .then((res) => {
        setLoading(false);
        if (res.data?.data?.data) {
          setCards(res.data.data.data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (loading) {
    return <Skeleton active />;
  }

  if (error) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Kechirasiz, sahifa topilmadi yoki ma'lumot yuklanmadi."
        extra={
          <Button type="primary" onClick={() => window.location.reload()}>
            Qayta yuklash
          </Button>
        }
      />
    );
  }

  const toggleLike = (item) => {
    const isLiked = sevimlilar.some((fav) => fav.id === item.id);

    if (isLiked) {
      setSevimlilar((prev) => prev.filter((fav) => fav.id !== item.id));
      messageApi.warning(`${item.name.slice(0, 19)} sevimlilardan olib tashlandi!`);
    } else {
      setSevimlilar((prev) => [...prev, item]);
      messageApi.success(`${item.name.slice(0, 19)} sevimlilarga qo'shildi!`);
    }
  };

  const onAdd = (item) => {
    setSavatcha((prevCards) => {
      const existingItem = prevCards.find((s) => s.mahsulotlar.id === item.id);
      if (existingItem) {
        return prevCards.map((savatcha_item) =>
          savatcha_item.mahsulotlar.id === item.id
            ? { ...savatcha_item, count: savatcha_item.count + 1 }
            : savatcha_item
        );
      } else {
        return [...prevCards, { mahsulotlar: item, count: 1 }];
      }
    });

    messageApi.success(`${item.name.slice(0, 19)} savatchaga qo'shildi!`);
  };

  return (
    <div className="grid grid-cols-5 pt-5 container m-auto gap-4">
      {contextHolder}
      {cards.map((item) => {
        const isLiked = sevimlilar.some((fav) => fav.id === item.id);

        return (
          <div
            key={item.id}
            className="p-4 relative transition-transform transform hover:scale-105"
          >
            <span>
              <img
                onClick={() => toggleLike(item)}
                className="w-7 cursor-pointer absolute top-5 right-5"
                src={isLiked ? sertsa2 : sertsa1}
                alt="Heart Icon"
              />
            </span>

            <div className="p-3 rounded-xl h-[400px] shadow-lg bg-white">
              <img
                className="w-64 h-60 cursor-pointer object-cover"
                src={item.image}
                alt="Product"
              />
              <p className="text-xl text-black pt-2">{item.name.slice(0, 19)}</p>
              <div className="flex gap-3">
                <p className="text-black mt-7 rounded-2xl py-1 px-2 text-sm bg-blue-100">
                  {item.axiom_monthly_price}
                </p>
                <p className="line-through opacity-65 pt-5">
                  {item.discount_value}
                </p>
              </div>
              <p className="bg-yellow-400 px-4 py-1 w-44 rounded-2xl mt-2">
                {item.publish_date}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-7 justify-end">
              <div
                onClick={() => onAdd(item)}
                className="border-2 border-yellow-400 cursor-pointer p-2 rounded-xl"
              >
                <ShoppingCart02Icon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cardlar;
