import React, { useState } from "react";
import UserIcon from "../../../assets/ikonkalar/Usder";
import FavouriteIcon from "../../../assets/ikonkalar/Heart";
import ShoppingCart02Icon from "../../../assets/ikonkalar/Shoping";
import { Modal, Button } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import useMyStore from "../../../store";

function NavUser({
  savatcha = [],
  setSavatcha,
  toggleOPen,
  showModal,
  setShowModal,
}) {
  const totalCount = savatcha.reduce((sum, item) => sum + item.count, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { like } = useMyStore();
  const showwmodal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //! Ko'payish

  const incrementItemCount = (index) => {
    setSavatcha((prevSavatcha) =>
      prevSavatcha.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  //! Ko'payish

  //! Kamayish
  const decrementItemCount = (index) => {
    setSavatcha((prevSavatcha) =>
      prevSavatcha
        .map((item, i) =>
          i === index && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };
  //! Kamayish
  //! O'chirib tashlash
  const removeItem = (index) => {
    setSavatcha((prevSavatcha) => prevSavatcha.filter((_, i) => i !== index));
  };
  //! O'chirib tashlash

  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center">
        <UserIcon />
        <p>Krish</p>
      </div>
      <div
        className="flex flex-col items-center relative cursor-pointer"
        onClick={toggleOPen}
      >
        <FavouriteIcon />
        {like > 0 && (
          <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-xs font-bold flex items-center justify-center rounded-full w-5 h-5">
            {like}
          </span>
        )}
        <p>Sevimli</p>
      </div>
      <div
        className="flex flex-col items-center relative cursor-pointer"
        onClick={showwmodal}
      >
        <ShoppingCart02Icon />
        {totalCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-xs font-bold flex items-center justify-center rounded-full w-5 h-5">
            {totalCount}
          </span>
        )}
        <p>Savatcha</p>
      </div>

      <Modal
        title="🛒 Savatcha"
        open={isModalOpen}
        onCancel={handleCancel}
        width={1200}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Yopish
          </Button>,
        ]}
      >
        {savatcha.length ? (
          <div className="">
                <div className="flex justify-between pt-5 ">
                  <p>Hammasini tanlash</p>
                  <p>Tanlashni o'chirish</p>
                </div>
            {savatcha.map((item, index) => (
              <div key={item.id} className="">
                <div className=" flex justify-between ">
                  <div className="flex justify-between pt-5 pb-5 gap-5">
                    <div className="flex items-center pl-15 gap-3">
                      <img
                        className="w-16 h-16 object-cover rounded"
                        src={item.mahsulotlar.image}
                        alt="Product"
                      />
                      <span className="text-xl">{item.mahsulotlar.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        icon={<MinusOutlined />}
                        onClick={() => decrementItemCount(index)}
                        disabled={item.count === 1}
                      />
                      <span className="text-lg font-semibold">
                        {item.count}
                      </span>
                      <Button
                        icon={<PlusOutlined />}
                        onClick={() => incrementItemCount(index)}
                      />
                      <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => removeItem(index)}
                      />
                    </div>
                  </div>
                  <div className="border rounded border-indigo-200 mt-3  h-auto ml-5 p-2 ">
                    <div className=" flex items-center gap-3 border p-2 rounded border-indigo-500">
                      <Button type="primary">Hoziroq tolash</Button>
                      <Button>Muddatli to'lo'v</Button>
                    </div>
                    <div>
                      <p>{item.count} manashuncha mahsulotni olasizmi</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-5">
            Savatchangiz bo'sh 😊
          </p>
        )}
      </Modal>
    </div>
  );
}

export default NavUser;
