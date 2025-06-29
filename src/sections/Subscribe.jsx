import { useState } from "react";

const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [town, setTown] = useState("");


  function handleInput(e) {
    let value = e.target.value.replace(/\D/g, "");

    if (!value.startsWith("7")) {
      value = "7" + value;
    }

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    const formattedValue = "+" + value;
    setPhone(formattedValue);
  }


  function handleFocus(e) {
    if (!phone) {
      setPhone("+ 7 ");
    }
  }


  function Submit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("Town", town);

    fetch(
      "https://script.google.com/macros/s/AKfycbxswdkCufR1B-kazTUr1TNjAMmvQISBAOU9Vc0b0o8awbNuVnz4B47YsxgUC-CkYhJ9/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json();
        }
        return res.text();
      })
      .then(() => {
        setIsSubmitting(false);
        setIsModalOpen(true);
        setName("");
        setPhone("");
        setTown("");
      })
      .catch(() => {
        alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
        setIsSubmitting(false);
      });
  }

  return (
    <section
      id="signup"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 max-w-[80%] xl:ml-[230px]"
    >
      <div className="lg:max-w-[35%] ml-20 max-xl:ml-0">
        <h3 className="text-[42px] leading-[48px] max-sm:text-[36px]  max-sm:leading-[40px] lg:max-w-md font-worksans font-bold">
          Не упусти свой <span className="text-coral-red underline">шанс</span> изменить жизнь!
        </h3>
        <p className="mt-4 info-text">
          Запишись на <span className="italic font-bold">бесплатный мастер-класс</span> и начни свой путь трансформации уже сейчас.
        </p>
      </div>

      <div className="lg:max-w-[35%] w-full">
        <form className="form max-w-sm" onSubmit={(e) => Submit(e)}>
          <div className="mb-5">
            <input
              type="text"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              required
              className="bg-transparent border border-gray-300 text-gray-600 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-600 caret-gray-600"
            />

          </div>
          <div className="mb-5">
            <input
              type="tel"
              name="Phone"
              maxLength="16"
              placeholder="Ваш номер телефона"
              value={phone}
              onInput={handleInput}
              onFocus={handleFocus}
              required
              className="bg-transparent border border-gray-300 text-gray-600 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-600 caret-gray-600"
            />


          </div>
          <div className="mb-5 relative">
            <select
              name="Town"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              required
              className="bg-transparent border border-gray-300 text-gray-600 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-600 caret-gray-600 pr-10"
            >
              <option value="" disabled>
                Выберите город
              </option>
              <option>Алматы</option>
              <option>Астана</option>
              <option>Шымкент</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full border-coral-red bg-coral-red text-white font-medium text-sm rounded-lg py-2.5 mt-6 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
          </button>
        </form>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md">
              <h2 className="text-xl font-bold text-gray-800">Успех!</h2>
              <p className="text-gray-600 mt-4">
                Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
              </p>
              <button
                className="mt-6 bg-coral-red text-white py-2 px-4 rounded-lg hover:bg-red-500 transition"
                onClick={() => setIsModalOpen(false)}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
