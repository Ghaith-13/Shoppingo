import React from 'react'
import ReactPaginate from 'react-paginate'
import Navbar from '../../../components/Navbar'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from 'react';
import Popup from 'reactjs-popup';




function order() {
  // constants
  const [items,setItems] =useState([
   {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة صوف قطن شتوية صيفية ربيعية خريفية موجودة في شارع الحضارة " ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
    {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
       {"typeOfCustumer":"غيث عثمان",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
      {"typeOfCustumer":"رونيا عودة",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
      {"typeOfCustumer":"علي الديوب",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
      {"typeOfCustumer":"ماريلا رحال",
     "TypeOfProduct":"كنزة" ,
      "TypeBuy":"WePay","Date":"14/1/2001"
    ,"img":"../../defaultProduct.jfif"},
      {"typeOfCustumer":"حسن المحمود",
      "TypeOfProduct":"كنزة" ,
       "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
       {"typeOfCustumer":"أحمد أحمد",
      "TypeOfProduct":"كنزة" ,
       "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
       {"typeOfCustumer":"علاء أحمد",
      "TypeOfProduct":"كنزة" ,
       "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
       {"typeOfCustumer":"ماريلا رحال",
      "TypeOfProduct":"كنزة" ,
       "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
       {"typeOfCustumer":"غيث عثمان",
       "TypeOfProduct":"كنزة" ,
        "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
        {"typeOfCustumer":"رونيا عودة",
       "TypeOfProduct":"كنزة" ,
        "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
        {"typeOfCustumer":"علي الديوب",
       "TypeOfProduct":"كنزة" ,
        "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
        {"typeOfCustumer":"ماريلا رحال",
       "TypeOfProduct":"كنزة" ,
        "TypeBuy":"WePay","Date":"14/1/2001"
      ,"img":"../../defaultProduct.jfif"},
        {"typeOfCustumer":"غيث عثمان",
        "TypeOfProduct":"كنزة" ,
         "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
         {"typeOfCustumer":"رونيا عودة",
        "TypeOfProduct":"كنزة" ,
         "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
         {"typeOfCustumer":"علي الديوب",
        "TypeOfProduct":"كنزة" ,
         "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
         {"typeOfCustumer":"ماريلا رحال",
        "TypeOfProduct":"كنزة" ,
         "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
         {"typeOfCustumer":"غيث عثمان",
         "TypeOfProduct":"كنزة" ,
          "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
          {"typeOfCustumer":"رونيا عودة",
         "TypeOfProduct":"كنزة" ,
          "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
          {"typeOfCustumer":"علي الديوب",
         "TypeOfProduct":"كنزة" ,
          "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
          {"typeOfCustumer":"ماريلا رحال",
         "TypeOfProduct":"كنزة" ,
          "TypeBuy":"WePay","Date":"14/1/2001"
        ,"img":"../../defaultProduct.jfif"},
          {"typeOfCustumer":"ماريلا رحال",
          "TypeOfProduct":"كنزة" ,
           "TypeBuy":"WePay","Date":"14/1/2001"
          ,"img":"../../defaultProduct.jfif"},{"typeOfCustumer":"غيث عثمان",
           "TypeOfProduct":"كنزة" ,
            "TypeBuy":"WePay","Date":"14/1/2001"
          ,"img":"../../defaultProduct.jfif"},
            {"typeOfCustumer":"رونيا عودة",
           "TypeOfProduct":"كنزة" ,
            "TypeBuy":"WePay","Date":"14/1/2001"
          ,"img":"../../defaultProduct.jfif"},
            {"typeOfCustumer":"علي الديوب",
           "TypeOfProduct":"كنزة" ,
            "TypeBuy":"WePay","Date":"14/1/2001"
          ,"img":"../../defaultProduct.jfif"},
            {"typeOfCustumer":"ماريلا رحال",
           "TypeOfProduct":"كنزة" ,
            "TypeBuy":"WePay","Date":"14/1/2001"
          ,"img":"../../defaultProduct.jfif"},
            {"typeOfCustumer":"حسن المحمود",
            "TypeOfProduct":"كنزة" ,
             "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
             {"typeOfCustumer":"أحمد أحمد",
            "TypeOfProduct":"كنزة" ,
             "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
             {"typeOfCustumer":"علاء أحمد",
            "TypeOfProduct":"كنزة" ,
             "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
             {"typeOfCustumer":"ماريلا رحال",
            "TypeOfProduct":"كنزة" ,
             "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
             {"typeOfCustumer":"غيث عثمان",
             "TypeOfProduct":"كنزة" ,
              "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
              {"typeOfCustumer":"رونيا عودة",
             "TypeOfProduct":"كنزة" ,
              "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
              {"typeOfCustumer":"علي الديوب",
             "TypeOfProduct":"كنزة" ,
              "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
              {"typeOfCustumer":"ماريلا رحال",
             "TypeOfProduct":"كنزة" ,
              "TypeBuy":"WePay","Date":"14/1/2001"
            ,"img":"../../defaultProduct.jfif"},
              {"typeOfCustumer":"غيث عثمان",
              "TypeOfProduct":"كنزة" ,
               "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
               {"typeOfCustumer":"رونيا عودة",
              "TypeOfProduct":"كنزة" ,
               "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
               {"typeOfCustumer":"علي الديوب",
              "TypeOfProduct":"كنزة" ,
               "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
               {"typeOfCustumer":"ماريلا رحال",
              "TypeOfProduct":"كنزة" ,
               "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
               {"typeOfCustumer":"غيث عثمان",
               "TypeOfProduct":"كنزة" ,
                "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
                {"typeOfCustumer":"رونيا عودة",
               "TypeOfProduct":"كنزة" ,
                "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
                {"typeOfCustumer":"علي الديوب",
               "TypeOfProduct":"كنزة" ,
                "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
                {"typeOfCustumer":"ماريلا رحال",
               "TypeOfProduct":"كنزة" ,
                "TypeBuy":"WePay","Date":"14/1/2001"
              ,"img":"../../defaultProduct.jfif"},
                {"typeOfCustumer":"ماريلا رحال",
                "TypeOfProduct":"كنزة" ,
                 "TypeBuy":"WePay","Date":"14/1/2001"
                ,"img":"../../defaultProduct.jfif"},{"typeOfCustumer":"غيث عثمان",
                 "TypeOfProduct":"كنزة" ,
                  "TypeBuy":"WePay","Date":"14/1/2001"
                ,"img":"../../defaultProduct.jfif"},
                  {"typeOfCustumer":"رونيا عودة",
                 "TypeOfProduct":"كنزة" ,
                  "TypeBuy":"WePay","Date":"14/1/2001"
                ,"img":"../../defaultProduct.jfif"},
                  {"typeOfCustumer":"علي الديوب",
                 "TypeOfProduct":"كنزة" ,
                  "TypeBuy":"WePay","Date":"14/1/2001"
                ,"img":"../../defaultProduct.jfif"},
                  {"typeOfCustumer":"ماريلا رحال",
                 "TypeOfProduct":"كنزة" ,
                  "TypeBuy":"WePay","Date":"14/1/2001"
                ,"img":"../../defaultProduct.jfif"},
                  {"typeOfCustumer":"حسن المحمود",
                  "TypeOfProduct":"كنزة" ,
                   "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                   {"typeOfCustumer":"أحمد أحمد",
                  "TypeOfProduct":"كنزة" ,
                   "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                   {"typeOfCustumer":"علاء أحمد",
                  "TypeOfProduct":"كنزة" ,
                   "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                   {"typeOfCustumer":"ماريلا رحال",
                  "TypeOfProduct":"كنزة" ,
                   "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                   {"typeOfCustumer":"غيث عثمان",
                   "TypeOfProduct":"كنزة" ,
                    "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                    {"typeOfCustumer":"رونيا عودة",
                   "TypeOfProduct":"كنزة" ,
                    "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                    {"typeOfCustumer":"علي الديوب",
                   "TypeOfProduct":"كنزة" ,
                    "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                    {"typeOfCustumer":"ماريلا رحال",
                   "TypeOfProduct":"كنزة" ,
                    "TypeBuy":"WePay","Date":"14/1/2001"
                  ,"img":"../../defaultProduct.jfif"},
                    {"typeOfCustumer":"غيث عثمان",
                    "TypeOfProduct":"كنزة" ,
                     "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                     {"typeOfCustumer":"رونيا عودة",
                    "TypeOfProduct":"كنزة" ,
                     "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                     {"typeOfCustumer":"علي الديوب",
                    "TypeOfProduct":"كنزة" ,
                     "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                     {"typeOfCustumer":"ماريلا رحال",
                    "TypeOfProduct":"كنزة" ,
                     "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                     {"typeOfCustumer":"غيث عثمان",
                     "TypeOfProduct":"كنزة" ,
                      "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                      {"typeOfCustumer":"رونيا عودة",
                     "TypeOfProduct":"كنزة" ,
                      "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                      {"typeOfCustumer":"علي الديوب",
                     "TypeOfProduct":"كنزة" ,
                      "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                      {"typeOfCustumer":"ماريلا رحال",
                     "TypeOfProduct":"كنزة" ,
                      "TypeBuy":"WePay","Date":"14/1/2001"
                    ,"img":"../../defaultProduct.jfif"},
                      {"typeOfCustumer":"ماريلا رحال",
                      "TypeOfProduct":"كنزة" ,
                       "TypeBuy":"WePay","Date":"14/1/2001"
                      ,"img":"../../defaultProduct.jfif"},{"typeOfCustumer":"غيث عثمان",
                       "TypeOfProduct":"كنزة" ,
                        "TypeBuy":"WePay","Date":"14/1/2001"
                      ,"img":"../../defaultProduct.jfif"},
                        {"typeOfCustumer":"رونيا عودة",
                       "TypeOfProduct":"كنزة" ,
                        "TypeBuy":"WePay","Date":"14/1/2001"
                      ,"img":"../../defaultProduct.jfif"},
                        {"typeOfCustumer":"علي الديوب",
                       "TypeOfProduct":"كنزة" ,
                        "TypeBuy":"WePay","Date":"14/1/2001"
                      ,"img":"../../defaultProduct.jfif"},
                        {"typeOfCustumer":"ماريلا رحال",
                       "TypeOfProduct":"كنزة" ,
                        "TypeBuy":"WePay","Date":"14/1/2001"
                      ,"img":"../../defaultProduct.jfif"},
                        {"typeOfCustumer":"حسن المحمود",
                        "TypeOfProduct":"كنزة" ,
                         "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                         {"typeOfCustumer":"أحمد أحمد",
                        "TypeOfProduct":"كنزة" ,
                         "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                         {"typeOfCustumer":"علاء أحمد",
                        "TypeOfProduct":"كنزة" ,
                         "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                         {"typeOfCustumer":"ماريلا رحال",
                        "TypeOfProduct":"كنزة" ,
                         "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                         {"typeOfCustumer":"غيث عثمان",
                         "TypeOfProduct":"كنزة" ,
                          "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                          {"typeOfCustumer":"رونيا عودة",
                         "TypeOfProduct":"كنزة" ,
                          "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                          {"typeOfCustumer":"علي الديوب",
                         "TypeOfProduct":"كنزة" ,
                          "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                          {"typeOfCustumer":"ماريلا رحال",
                         "TypeOfProduct":"كنزة" ,
                          "TypeBuy":"WePay","Date":"14/1/2001"
                        ,"img":"../../defaultProduct.jfif"},
                          {"typeOfCustumer":"غيث عثمان",
                          "TypeOfProduct":"كنزة" ,
                           "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                           {"typeOfCustumer":"رونيا عودة",
                          "TypeOfProduct":"كنزة" ,
                           "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                           {"typeOfCustumer":"علي الديوب",
                          "TypeOfProduct":"كنزة" ,
                           "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                           {"typeOfCustumer":"ماريلا رحال",
                          "TypeOfProduct":"كنزة" ,
                           "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                           {"typeOfCustumer":"غيث عثمان",
                           "TypeOfProduct":"كنزة" ,
                            "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                            {"typeOfCustumer":"رونيا عودة",
                           "TypeOfProduct":"كنزة" ,
                            "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                            {"typeOfCustumer":"علي الديوب",
                           "TypeOfProduct":"كنزة" ,
                            "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                            {"typeOfCustumer":"ماريلا رحال",
                           "TypeOfProduct":"كنزة" ,
                            "TypeBuy":"WePay","Date":"14/1/2001"
                          ,"img":"../../defaultProduct.jfif"},
                            {"typeOfCustumer":"ماريلا رحال",
                            "TypeOfProduct":"كنزة" ,
                             "TypeBuy":"WePay","Date":"14/1/2001"
                            ,"img":"../../defaultProduct.jfif"},{"typeOfCustumer":"غيث عثمان",
                             "TypeOfProduct":"كنزة" ,
                              "TypeBuy":"WePay","Date":"14/1/2001"
                            ,"img":"../../defaultProduct.jfif"},
                              {"typeOfCustumer":"رونيا عودة",
                             "TypeOfProduct":"كنزة" ,
                              "TypeBuy":"WePay","Date":"14/1/2001"
                            ,"img":"../../defaultProduct.jfif"},
                              {"typeOfCustumer":"علي الديوب",
                             "TypeOfProduct":"كنزة" ,
                              "TypeBuy":"WePay","Date":"14/1/2001"
                            ,"img":"../../defaultProduct.jfif"},
                              {"typeOfCustumer":"ماريلا رحال",
                             "TypeOfProduct":"كنزة" ,
                              "TypeBuy":"WePay","Date":"14/1/2001"
                            ,"img":"../../defaultProduct.jfif"},
                              {"typeOfCustumer":"حسن المحمود",
                              "TypeOfProduct":"كنزة" ,
                               "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                               {"typeOfCustumer":"أحمد أحمد",
                              "TypeOfProduct":"كنزة" ,
                               "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                               {"typeOfCustumer":"علاء أحمد",
                              "TypeOfProduct":"كنزة" ,
                               "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                               {"typeOfCustumer":"ماريلا رحال",
                              "TypeOfProduct":"كنزة" ,
                               "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                               {"typeOfCustumer":"غيث عثمان",
                               "TypeOfProduct":"كنزة" ,
                                "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                                {"typeOfCustumer":"رونيا عودة",
                               "TypeOfProduct":"كنزة" ,
                                "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                                {"typeOfCustumer":"علي الديوب",
                               "TypeOfProduct":"كنزة" ,
                                "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                                {"typeOfCustumer":"ماريلا رحال",
                               "TypeOfProduct":"كنزة" ,
                                "TypeBuy":"WePay","Date":"14/1/2001"
                              ,"img":"../../defaultProduct.jfif"},
                                {"typeOfCustumer":"غيث عثمان",
                                "TypeOfProduct":"كنزة" ,
                                 "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                 {"typeOfCustumer":"رونيا عودة",
                                "TypeOfProduct":"كنزة" ,
                                 "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                 {"typeOfCustumer":"علي الديوب",
                                "TypeOfProduct":"كنزة" ,
                                 "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                 {"typeOfCustumer":"ماريلا رحال",
                                "TypeOfProduct":"كنزة" ,
                                 "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                 {"typeOfCustumer":"غيث عثمان",
                                 "TypeOfProduct":"كنزة" ,
                                  "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                  {"typeOfCustumer":"رونيا عودة",
                                 "TypeOfProduct":"كنزة" ,
                                  "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                  {"typeOfCustumer":"علي الديوب",
                                 "TypeOfProduct":"كنزة" ,
                                  "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                  {"typeOfCustumer":"ماريلا رحال",
                                 "TypeOfProduct":"كنزة" ,
                                  "TypeBuy":"WePay","Date":"14/1/2001"
                                ,"img":"../../defaultProduct.jfif"},
                                  {"typeOfCustumer":"ماريلا رحال",
                                  "TypeOfProduct":"كنزة" ,
                                   "TypeBuy":"WePay","Date":"14/1/2001"
                                  ,"img":"../../defaultProduct.jfif"}
    ],); 
  const [ItemsDisplayed,setItemsDisplayed]=useState(items.slice(0, 10));
  const[FirstArrow,setFirstArrow]=useState(false);
  const[LastArrow,setLastArrow]=useState(true);
  // const [popUpIsOpen,setPopUpIsOpen]=useState(false);
  // functions
  const handleChange=(data)=>{
    // for left arrow
    if(data.selected==0)
      setFirstArrow(false);
    else
      setFirstArrow(true);
    // for right arrow
    if(data.selected==Math.ceil(items.length/10)-1)
      setLastArrow(false);
    else
      setLastArrow(true);

    setItemsDisplayed(items.slice((data.selected)*10,(data.selected)*10+10))
  }
  return (
<>
<Navbar />
<div className='pt-28 pb-10 flex flex-col w-full  '>
  <div className=' py-5 mb-3 w-full font-bold flex justify-center bg-gradient-to-l from-gradientFrom to-gradientTo dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 text-white text-xl'>
    الطلبات
  </div>

  {ItemsDisplayed.map((item)=>{
    return(
      <div className='flex md:flex-row flex-col md:justify-between  w-3/4 border my-5  px-5 py-10 mx-auto shadow-md text-black rounded-lg dark:border-0 dark:shadow-white dark:shadow-sm '>
        <div className=' flex flex-col justify-start items-center py-2 md:py-0 border-b md:border-0'> 
          <div className='font-bold dark:text-white'>معلومات الزبون</div>
          <div className='dark:text-white'>{item.typeOfCustumer}</div>
        </div>
        <div className='flex flex-col  justify-start items-center py-2 md:py-0 border-b md:border-0 '> 
          <div className='font-bold dark:text-white'>التاريخ والوقت</div>
          <div className='dark:text-white'>{item.Date}</div> 
        </div>      
        <div className='flex flex-col justify-start items-center py-2 md:py-0 border-b md:border-0'> 
          <div className='font-bold dark:text-white'>طريقة الشراء</div>
          <div className='dark:text-white'>{item.TypeBuy}</div>
        </div>
        <div className='flex flex-col justify-start items-center py-2 md:py-0 '>
        <Popup trigger=
                {<button className='px-2 py-3 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl'> معلومات المننتج </button>}
                modal nested>
                {
                    close => (
                        <div className='flex flex-col justify-between shadow-2xl rounded-lg bg-gray-50 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 w-[250px] md:w-[650px] h-[350px] md:h-[600px] p-3 md:p-10'>
                            <div className='flex justify-between md:px-5 py-10 w-full'>
                              <img src={item.img} className=' w-20 h-32 md:w-40 md:h-52 rounded' />
                              
                              <div className=' flex flex-col justify-start items-end pl-5 text-end'>
                                <div className='font-bold'>معلومات حول المنتج</div>
                                <div className='flex justify-end'>{item.TypeOfProduct}</div>
                              </div>
                            </div>
                            <div className='flex w-full justify-start px-5'>
                                <button className='px-4 py-3 dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 dark:hover:bg-gradient-to-tl' onClick=
                                    {() => close()}>
                                        إغلاق 
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
       
      </div>
    );
  })}
<ReactPaginate
        breakLabel={<span className="md:mr-4 mr-1 text-white">...</span>}
        nextLabel={
           LastArrow?( <span className="w-4 h-4 md:w-10 md:h-10 flex items-center hover:bg-textColor dark:hover:bg-gray-500 justify-center text-white rounded-md">
           <BsChevronRight />
         </span>):null
        }
        onPageChange={handleChange}
        pageRangeDisplayed={1}

        pageCount={items.length/10}
        previousLabel={
          FirstArrow?( <span className="text-white hover:bg-textColor dark:hover:bg-gray-500 w-4 h-4 md:w-10 md:h-10 flex items-center justify-center rounded-md mr-4">
          <BsChevronLeft />
       </span>
          ):null
        }
        containerClassName="flex items-center justify-center mt-8 mb-4 bg-gradient-to-l from-gradientFrom to-gradientTo dark:bg-gradient-to-tr dark:from-darkBgColor dark:to-darkTextColor2 "
        pageClassName="block border- border-solid text-white border-lightGray hover:bg-textColor dark:hover:bg-gray-500 text-sm md:text-lg w-2  md:w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName=" text-lg font-bold"
        
      />

</div>
</>  )
}

export default order