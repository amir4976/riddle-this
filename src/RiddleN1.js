import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import awnsers from "./Awnser";
export default function RiddleN1() {
  let [line2, setLine2] = useState(false);
  setTimeout(() => {
    setLine2(true);
  }, 10000);

  let [line3, setLine3] = useState(false);

  setTimeout(() => {
    setLine3(true);
  }, 15000);

  let [Start, setStart] = useState(false);

  const EnterRiddels = (event) => {
    if (event.nativeEvent.keyCode == 13) {
      if (event.nativeEvent.target.value === "y") {
        setStart(true);
      } else {
        setStart(false);
      }
    }
    console.log(Start);
  };

  let [PassN1 , setPassN1] = useState(false);
  let [PassN2 , setPassN2] = useState(false);
  let [PassN3 , setPassN3] = useState(false);
  const awnserRiddleN1 = (e) => {
    if (e.nativeEvent.keyCode == 13) {
      if (e.nativeEvent.target.value == awnsers[0].Sum) {
      setPassN1(true)
      } else {
        setPassN1(false)
      }
    }
  };
    const awnserRiddleN2 = (e) => {
    if (e.nativeEvent.keyCode == 13) {
      if (e.nativeEvent.target.value == awnsers[1].Sum) {
      setPassN2(true)
      } else {
        setPassN2(false)
      }
    }
  };    const awnserRiddleN3 = (e) => {
    if (e.nativeEvent.keyCode == 13) {
      if (e.nativeEvent.target.value == awnsers[2].Sum) {
      setPassN3(true)
      } else {
        setPassN3(false)
      }
    }
  };
  



  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("hi batsy i think you are gonna be glade to find me!")
            .start();
        }}
      />
      {line2 && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("you know what ? lets play a game?").start();
          }}
        />
      )}
      {line3 && (
        <>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "awnser to this 3 riddles and i'll be serenader is that good enough for you?? n/y"
                )

                .start();
            }}
          />
          <input type="text" onKeyDown={EnterRiddels} />
        </>
      )}
      {Start && (
        <>
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "what is that we have to broke it before we use it?"
                )

                .start();
            }}
          />
          <input type="text" onKeyDown={awnserRiddleN1} />
        </>
      )}  
      {PassN1 ?  (
        <>
          {" "}
           <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "  that was awsome you are so smart. ok smart ass awnser this:"
                )

                .start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "  I’m tall when I’m young, and I’m short when I’m old. What am I?"
                )

                .start();
            }}
          />
          <input type="text" onKeyDown={awnserRiddleN2} />
        </>
      ): (<Typewriter onInit={(typewriter)=>{
        typewriter
          .typeString('go fuck your self im gonna destroyed gotham')
      }}/>) }  
          {PassN2 ?  (
        <>
          {" "}
           <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  " how did you know that shit what about this: People make me, save me, change me, raise me. What am I??"
                )

                .start();
            }}
          />
          <input type="text" onKeyDown={awnserRiddleN3} />
        </>
      ): (<Typewriter onInit={(typewriter)=>{
        typewriter
          .typeString('go fuck your self im gonna destroyed gotham')
      }}/>) }  
      
         {PassN3 && (
        <>

           <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  " ok bats you win this round and i hate to say that but you have my word im serenader "
                )

                .start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  " mission pass "
                )

                .start();
            }}
          />



        </>
      )}

      

    </div>
  );
}
