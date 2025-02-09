import React, { useState } from "react";
import UserIcon from "../../../assets/ikonkalar/Usder";
import FavouriteIcon from "../../../assets/ikonkalar/Heart";
import ShoppingCart02Icon from "../../../assets/ikonkalar/Shoping";
import { Modal, Button } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

function NavUser({ savatcha = [], setSavatcha }) {
  const totalCount = savatcha.reduce((sum, item) => sum + item.count, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const incrementItemCount = (index) => {
    setSavatcha((prevSavatcha) =>
      prevSavatcha.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementItemCount = (index) => {
    setSavatcha((prevSavatcha) =>
      prevSavatcha
        .map((item, i) =>
          i === index && item.count > 1 ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0) // 0 ga tushganda o‘chirish
    );
  };

  const removeItem = (index) => {
    setSavatcha((prevSavatcha) => prevSavatcha.filter((_, i) => i !== index));
  };

  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <UserIcon />
        <p>Krish</p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer" onClick={showModal}>
        <FavouriteIcon />
        {totalCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-xs font-bold flex items-center justify-center rounded-full w-5 h-5">
            {totalCount}
          </span>
        )}
        <p>Sevimli</p>
      </div>
      <div className="flex flex-col items-center relative cursor-pointer" onClick={showModal}>
        <ShoppingCart02Icon />
        {totalCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-xs font-bold flex items-center justify-center rounded-full w-5 h-5">
            {totalCount}
          </span>
        )}
        <p>Savatcha</p>
      </div>

      <Modal
        title="🛒 Savatchangiz"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Yopish
          </Button>,
        ]}
      >
        {savatcha.length ? (
          <div className="space-y-3">
            {savatcha.map((item, index) => (
              <div key={item.id} className="flex items-center justify-between p-3 border-b">
                <div className="flex items-center gap-3">
                  <img className="w-16 h-16 object-cover rounded" src={item.mahsulotlar.image} alt="Product" />
                  <span className="text-lg font-medium">{item.mahsulotlar.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() => decrementItemCount(index)}
                    disabled={item.count === 1}
                  />
                  <span className="text-lg font-semibold">{item.count}</span>
                  <Button icon={<PlusOutlined />} onClick={() => incrementItemCount(index)} />
                  <Button icon={<DeleteOutlined />} danger onClick={() => removeItem(index)} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-5">Savatchangiz bo'sh 😊</p>
        )}
      </Modal>
    </div>
  );
}

export default NavUser;