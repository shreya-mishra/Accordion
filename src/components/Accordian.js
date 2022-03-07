import React from "react";
import { View } from "react-native";
import { data } from "../data/data";
import Question from "./Question";

const Accordian = () => {
  return (
    <View>
      <section className="accordian">
        <h1>FAQ</h1>

        {data.map((item) => {
          return (
            <Question
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </section>
    </View>
  );
};

export default Accordian;
