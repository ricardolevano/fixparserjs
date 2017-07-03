module.exports = {
  "version": "FIXT.1.1",
  "header": {
    "field": [{
      "name": "BeginString",
      "required": "Y"
    }, {
      "name": "BodyLength",
      "required": "Y"
    }, {
      "name": "MsgType",
      "required": "Y"
    }, {
      "name": "SenderCompID",
      "required": "Y"
    }, {
      "name": "TargetCompID",
      "required": "Y"
    }, {
      "name": "OnBehalfOfCompID",
      "required": "N"
    }, {
      "name": "DeliverToCompID",
      "required": "N"
    }, {
      "name": "SecureDataLen",
      "required": "N"
    }, {
      "name": "SecureData",
      "required": "N"
    }, {
      "name": "MsgSeqNum",
      "required": "Y"
    }, {
      "name": "SenderSubID",
      "required": "N"
    }, {
      "name": "SenderLocationID",
      "required": "N"
    }, {
      "name": "TargetSubID",
      "required": "N"
    }, {
      "name": "TargetLocationID",
      "required": "N"
    }, {
      "name": "OnBehalfOfSubID",
      "required": "N"
    }, {
      "name": "OnBehalfOfLocationID",
      "required": "N"
    }, {
      "name": "DeliverToSubID",
      "required": "N"
    }, {
      "name": "DeliverToLocationID",
      "required": "N"
    }, {
      "name": "PossDupFlag",
      "required": "N"
    }, {
      "name": "PossResend",
      "required": "N"
    }, {
      "name": "SendingTime",
      "required": "Y"
    }, {
      "name": "OrigSendingTime",
      "required": "N"
    }, {
      "name": "XmlDataLen",
      "required": "N"
    }, {
      "name": "XmlData",
      "required": "N"
    }, {
      "name": "MessageEncoding",
      "required": "N"
    }, {
      "name": "LastMsgSeqNumProcessed",
      "required": "N"
    }, {
      "name": "ApplVerID",
      "required": "N"
    }, {
      "name": "CstmApplVerID",
      "required": "N"
    }],
    "component": {
      "name": "HopGrp",
      "required": "N"
    }
  },
  "trailer": {
    "field": [{
      "name": "SignatureLength",
      "required": "N"
    }, {
      "name": "Signature",
      "required": "N"
    }, {
      "name": "CheckSum",
      "required": "Y"
    }]
  },
  "messages": {
    "message": [{
      "field": {
        "name": "TestReqID",
        "required": "N"
      },
      "msgcat": "admin",
      "msgtype": "0",
      "name": "Heartbeat"
    }, {
      "field": {
        "name": "TestReqID",
        "required": "Y"
      },
      "msgcat": "admin",
      "msgtype": "1",
      "name": "TestRequest"
    }, {
      "field": [{
        "name": "BeginSeqNo",
        "required": "Y"
      }, {
        "name": "EndSeqNo",
        "required": "Y"
      }],
      "msgcat": "admin",
      "msgtype": "2",
      "name": "ResendRequest"
    }, {
      "field": [{
        "name": "RefSeqNum",
        "required": "Y"
      }, {
        "name": "RefTagID",
        "required": "N"
      }, {
        "name": "RefMsgType",
        "required": "N"
      }, {
        "name": "SessionRejectReason",
        "required": "N"
      }, {
        "name": "Text",
        "required": "N"
      }, {
        "name": "EncodedTextLen",
        "required": "N"
      }, {
        "name": "EncodedText",
        "required": "N"
      }],
      "msgcat": "admin",
      "msgtype": "3",
      "name": "Reject"
    }, {
      "field": [{
        "name": "GapFillFlag",
        "required": "N"
      }, {
        "name": "NewSeqNo",
        "required": "Y"
      }],
      "msgcat": "admin",
      "msgtype": "4",
      "name": "SequenceReset"
    }, {
      "field": [{
        "name": "Text",
        "required": "N"
      }, {
        "name": "EncodedTextLen",
        "required": "N"
      }, {
        "name": "EncodedText",
        "required": "N"
      }],
      "msgcat": "admin",
      "msgtype": "5",
      "name": "Logout"
    }, {
      "field": [{
        "name": "EncryptMethod",
        "required": "Y"
      }, {
        "name": "HeartBtInt",
        "required": "Y"
      }, {
        "name": "RawDataLength",
        "required": "N"
      }, {
        "name": "RawData",
        "required": "N"
      }, {
        "name": "ResetSeqNumFlag",
        "required": "N"
      }, {
        "name": "NextExpectedMsgSeqNum",
        "required": "N"
      }, {
        "name": "MaxMessageSize",
        "required": "N"
      }, {
        "name": "TestMessageIndicator",
        "required": "N"
      }, {
        "name": "Username",
        "required": "N"
      }, {
        "name": "Password",
        "required": "N"
      }, {
        "name": "DefaultApplVerID",
        "required": "Y"
      }],
      "component": {
        "name": "MsgTypeGrp",
        "required": "N"
      },
      "msgcat": "admin",
      "msgtype": "A",
      "name": "Logon"
    }]
  },
  "components": {
    "component": [{
      "group": {
        "field": [{
          "name": "HopCompID",
          "required": "N"
        }, {
          "name": "HopSendingTime",
          "required": "N"
        }, {
          "name": "HopRefID",
          "required": "N"
        }],
        "name": "NoHops",
        "required": "N"
      },
      "name": "HopGrp"
    }, {
      "group": {
        "field": [{
          "name": "RefMsgType",
          "required": "N"
        }, {
          "name": "MsgDirection",
          "required": "N"
        }, {
          "name": "RefApplVerID",
          "required": "N"
        }, {
          "name": "RefCstmApplVerID",
          "required": "N"
        }],
        "name": "NoMsgTypes",
        "required": "N"
      },
      "name": "MsgTypeGrp"
    }]
  },
  "fields": {
    "field": [{
      "name": "BeginSeqNo",
      "number": "7",
      "type": "SEQNUM"
    }, {
      "name": "BeginString",
      "number": "8",
      "type": "STRING"
    }, {
      "name": "BodyLength",
      "number": "9",
      "type": "LENGTH"
    }, {
      "name": "CheckSum",
      "number": "10",
      "type": "STRING"
    }, {
      "name": "EndSeqNo",
      "number": "16",
      "type": "SEQNUM"
    }, {
      "name": "MsgSeqNum",
      "number": "34",
      "type": "SEQNUM"
    }, {
      "value": [{
        "enum": "0",
        "description": "HEARTBEAT"
      }, {
        "enum": "1",
        "description": "TEST_REQUEST"
      }, {
        "enum": "2",
        "description": "RESEND_REQUEST"
      }, {
        "enum": "3",
        "description": "REJECT"
      }, {
        "enum": "4",
        "description": "SEQUENCE_RESET"
      }, {
        "enum": "5",
        "description": "LOGOUT"
      }, {
        "enum": "6",
        "description": "INDICATION_OF_INTEREST"
      }, {
        "enum": "7",
        "description": "ADVERTISEMENT"
      }, {
        "enum": "8",
        "description": "EXECUTION_REPORT"
      }, {
        "enum": "9",
        "description": "ORDER_CANCEL_REJECT"
      }, {
        "enum": "A",
        "description": "LOGON"
      }, {
        "enum": "B",
        "description": "NEWS"
      }, {
        "enum": "C",
        "description": "EMAIL"
      }, {
        "enum": "D",
        "description": "ORDER_SINGLE"
      }, {
        "enum": "E",
        "description": "ORDER_LIST"
      }, {
        "enum": "F",
        "description": "ORDER_CANCEL_REQUEST"
      }, {
        "enum": "G",
        "description": "ORDER_CANCEL_REPLACE_REQUEST"
      }, {
        "enum": "H",
        "description": "ORDER_STATUS_REQUEST"
      }, {
        "enum": "J",
        "description": "ALLOCATION_INSTRUCTION"
      }, {
        "enum": "K",
        "description": "LIST_CANCEL_REQUEST"
      }, {
        "enum": "L",
        "description": "LIST_EXECUTE"
      }, {
        "enum": "M",
        "description": "LIST_STATUS_REQUEST"
      }, {
        "enum": "N",
        "description": "LIST_STATUS"
      }, {
        "enum": "P",
        "description": "ALLOCATION_INSTRUCTION_ACK"
      }, {
        "enum": "Q",
        "description": "DONT_KNOW_TRADE"
      }, {
        "enum": "R",
        "description": "QUOTE_REQUEST"
      }, {
        "enum": "S",
        "description": "QUOTE"
      }, {
        "enum": "T",
        "description": "SETTLEMENT_INSTRUCTIONS"
      }, {
        "enum": "V",
        "description": "MARKET_DATA_REQUEST"
      }, {
        "enum": "W",
        "description": "MARKET_DATA_SNAPSHOT_FULL_REFRESH"
      }, {
        "enum": "X",
        "description": "MARKET_DATA_INCREMENTAL_REFRESH"
      }, {
        "enum": "Y",
        "description": "MARKET_DATA_REQUEST_REJECT"
      }, {
        "enum": "Z",
        "description": "QUOTE_CANCEL"
      }, {
        "enum": "a",
        "description": "QUOTE_STATUS_REQUEST"
      }, {
        "enum": "b",
        "description": "MASS_QUOTE_ACKNOWLEDGEMENT"
      }, {
        "enum": "c",
        "description": "SECURITY_DEFINITION_REQUEST"
      }, {
        "enum": "d",
        "description": "SECURITY_DEFINITION"
      }, {
        "enum": "e",
        "description": "SECURITY_STATUS_REQUEST"
      }, {
        "enum": "f",
        "description": "SECURITY_STATUS"
      }, {
        "enum": "g",
        "description": "TRADING_SESSION_STATUS_REQUEST"
      }, {
        "enum": "h",
        "description": "TRADING_SESSION_STATUS"
      }, {
        "enum": "i",
        "description": "MASS_QUOTE"
      }, {
        "enum": "j",
        "description": "BUSINESS_MESSAGE_REJECT"
      }, {
        "enum": "k",
        "description": "BID_REQUEST"
      }, {
        "enum": "l",
        "description": "BID_RESPONSE"
      }, {
        "enum": "m",
        "description": "LIST_STRIKE_PRICE"
      }, {
        "enum": "n",
        "description": "XML_MESSAGE"
      }, {
        "enum": "o",
        "description": "REGISTRATION_INSTRUCTIONS"
      }, {
        "enum": "p",
        "description": "REGISTRATION_INSTRUCTIONS_RESPONSE"
      }, {
        "enum": "q",
        "description": "ORDER_MASS_CANCEL_REQUEST"
      }, {
        "enum": "r",
        "description": "ORDER_MASS_CANCEL_REPORT"
      }, {
        "enum": "s",
        "description": "NEW_ORDER_CROSS"
      }, {
        "enum": "t",
        "description": "CROSS_ORDER_CANCEL_REPLACE_REQUEST"
      }, {
        "enum": "u",
        "description": "CROSS_ORDER_CANCEL_REQUEST"
      }, {
        "enum": "v",
        "description": "SECURITY_TYPE_REQUEST"
      }, {
        "enum": "w",
        "description": "SECURITY_TYPES"
      }, {
        "enum": "x",
        "description": "SECURITY_LIST_REQUEST"
      }, {
        "enum": "y",
        "description": "SECURITY_LIST"
      }, {
        "enum": "z",
        "description": "DERIVATIVE_SECURITY_LIST_REQUEST"
      }, {
        "enum": "AA",
        "description": "DERIVATIVE_SECURITY_LIST"
      }, {
        "enum": "AB",
        "description": "NEW_ORDER_MULTILEG"
      }, {
        "enum": "AC",
        "description": "MULTILEG_ORDER_CANCEL_REPLACE"
      }, {
        "enum": "AD",
        "description": "TRADE_CAPTURE_REPORT_REQUEST"
      }, {
        "enum": "AE",
        "description": "TRADE_CAPTURE_REPORT"
      }, {
        "enum": "AF",
        "description": "ORDER_MASS_STATUS_REQUEST"
      }, {
        "enum": "AG",
        "description": "QUOTE_REQUEST_REJECT"
      }, {
        "enum": "AH",
        "description": "RFQ_REQUEST"
      }, {
        "enum": "AI",
        "description": "QUOTE_STATUS_REPORT"
      }, {
        "enum": "AJ",
        "description": "QUOTE_RESPONSE"
      }, {
        "enum": "AK",
        "description": "CONFIRMATION"
      }, {
        "enum": "AL",
        "description": "POSITION_MAINTENANCE_REQUEST"
      }, {
        "enum": "AM",
        "description": "POSITION_MAINTENANCE_REPORT"
      }, {
        "enum": "AN",
        "description": "REQUEST_FOR_POSITIONS"
      }, {
        "enum": "AO",
        "description": "REQUEST_FOR_POSITIONS_ACK"
      }, {
        "enum": "AP",
        "description": "POSITION_REPORT"
      }, {
        "enum": "AQ",
        "description": "TRADE_CAPTURE_REPORT_REQUEST_ACK"
      }, {
        "enum": "AR",
        "description": "TRADE_CAPTURE_REPORT_ACK"
      }, {
        "enum": "AS",
        "description": "ALLOCATION_REPORT"
      }, {
        "enum": "AT",
        "description": "ALLOCATION_REPORT_ACK"
      }, {
        "enum": "AU",
        "description": "CONFIRMATION_ACK"
      }, {
        "enum": "AV",
        "description": "SETTLEMENT_INSTRUCTION_REQUEST"
      }, {
        "enum": "AW",
        "description": "ASSIGNMENT_REPORT"
      }, {
        "enum": "AX",
        "description": "COLLATERAL_REQUEST"
      }, {
        "enum": "AY",
        "description": "COLLATERAL_ASSIGNMENT"
      }, {
        "enum": "AZ",
        "description": "COLLATERAL_RESPONSE"
      }, {
        "enum": "BA",
        "description": "COLLATERAL_REPORT"
      }, {
        "enum": "BB",
        "description": "COLLATERAL_INQUIRY"
      }, {
        "enum": "BC",
        "description": "NETWORK_STATUS_REQUEST"
      }, {
        "enum": "BD",
        "description": "NETWORK_STATUS_RESPONSE"
      }, {
        "enum": "BE",
        "description": "USER_REQUEST"
      }, {
        "enum": "BF",
        "description": "USER_RESPONSE"
      }, {
        "enum": "BG",
        "description": "COLLATERAL_INQUIRY_ACK"
      }, {
        "enum": "BH",
        "description": "CONFIRMATION_REQUEST"
      }, {
        "enum": "BI",
        "description": "TRADING_SESSION_LIST_REQUEST"
      }, {
        "enum": "BJ",
        "description": "TRADING_SESSION_LIST"
      }, {
        "enum": "BK",
        "description": "SECURITY_LIST_UPDATE_REPORT"
      }, {
        "enum": "BL",
        "description": "ADJUSTED_POSITION_REPORT"
      }, {
        "enum": "BM",
        "description": "ALLOCATION_INSTRUCTION_ALERT"
      }, {
        "enum": "BN",
        "description": "EXECUTION_ACKNOWLEDGEMENT"
      }, {
        "enum": "BO",
        "description": "CONTRARY_INTENTION_REPORT"
      }, {
        "enum": "BP",
        "description": "SECURITY_DEFINITION_UPDATE_REPORT"
      }],
      "number": "35",
      "name": "MsgType",
      "type": "STRING"
    }, {
      "name": "NewSeqNo",
      "number": "36",
      "type": "SEQNUM"
    }, {
      "name": "PossDupFlag",
      "number": "43",
      "type": "BOOLEAN"
    }, {
      "name": "RefSeqNum",
      "number": "45",
      "type": "SEQNUM"
    }, {
      "name": "SenderCompID",
      "number": "49",
      "type": "STRING"
    }, {
      "name": "SenderSubID",
      "number": "50",
      "type": "STRING"
    }, {
      "name": "SendingTime",
      "number": "52",
      "type": "UTCTIMESTAMP"
    }, {
      "name": "TargetCompID",
      "number": "56",
      "type": "STRING"
    }, {
      "name": "TargetSubID",
      "number": "57",
      "type": "STRING"
    }, {
      "name": "Text",
      "number": "58",
      "type": "STRING"
    }, {
      "name": "Signature",
      "number": "89",
      "type": "DATA"
    }, {
      "name": "SecureDataLen",
      "number": "90",
      "type": "LENGTH"
    }, {
      "name": "SecureData",
      "number": "91",
      "type": "DATA"
    }, {
      "name": "SignatureLength",
      "number": "93",
      "type": "LENGTH"
    }, {
      "name": "RawDataLength",
      "number": "95",
      "type": "LENGTH"
    }, {
      "name": "RawData",
      "number": "96",
      "type": "DATA"
    }, {
      "name": "PossResend",
      "number": "97",
      "type": "BOOLEAN"
    }, {
      "value": [{
        "description": "NONE_OTHER",
        "enum": "0"
      }, {
        "description": "PKCS",
        "enum": "1"
      }, {
        "description": "DES",
        "enum": "2"
      }, {
        "description": "PKCS_DES",
        "enum": "3"
      }, {
        "description": "PGP_DES",
        "enum": "4"
      }, {
        "description": "PGP_DES_MD5",
        "enum": "5"
      }, {
        "description": "PEM_DES_MD5",
        "enum": "6"
      }],
      "name": "EncryptMethod",
      "number": "98",
      "type": "INT"
    }, {
      "name": "HeartBtInt",
      "number": "108",
      "type": "INT"
    }, {
      "name": "TestReqID",
      "number": "112",
      "type": "STRING"
    }, {
      "name": "OnBehalfOfCompID",
      "number": "115",
      "type": "STRING"
    }, {
      "name": "OnBehalfOfSubID",
      "number": "116",
      "type": "STRING"
    }, {
      "name": "OrigSendingTime",
      "number": "122",
      "type": "UTCTIMESTAMP"
    }, {
      "name": "GapFillFlag",
      "number": "123",
      "type": "BOOLEAN"
    }, {
      "name": "DeliverToCompID",
      "number": "128",
      "type": "STRING"
    }, {
      "name": "DeliverToSubID",
      "number": "129",
      "type": "STRING"
    }, {
      "name": "ResetSeqNumFlag",
      "number": "141",
      "type": "BOOLEAN"
    }, {
      "name": "SenderLocationID",
      "number": "142",
      "type": "STRING"
    }, {
      "name": "TargetLocationID",
      "number": "143",
      "type": "STRING"
    }, {
      "name": "OnBehalfOfLocationID",
      "number": "144",
      "type": "STRING"
    }, {
      "name": "DeliverToLocationID",
      "number": "145",
      "type": "STRING"
    }, {
      "name": "XmlDataLen",
      "number": "212",
      "type": "LENGTH"
    }, {
      "name": "XmlData",
      "number": "213",
      "type": "DATA"
    }, {
      "value": [{
        "enum": "ISO-2022-JP",
        "description": "ISO_2022_JP"
      }, {
        "enum": "EUC-JP",
        "description": "EUC_JP"
      }, {
        "enum": "SHIFT_JIS",
        "description": "SHIFT_JIS"
      }, {
        "enum": "UTF-8",
        "description": "UTF_8"
      }],
      "number": "347",
      "name": "MessageEncoding",
      "type": "STRING"
    }, {
      "name": "EncodedTextLen",
      "number": "354",
      "type": "LENGTH"
    }, {
      "name": "EncodedText",
      "number": "355",
      "type": "DATA"
    }, {
      "name": "LastMsgSeqNumProcessed",
      "number": "369",
      "type": "SEQNUM"
    }, {
      "name": "RefTagID",
      "number": "371",
      "type": "INT"
    }, {
      "name": "RefMsgType",
      "number": "372",
      "type": "STRING"
    }, {
      "value": [{
        "description": "INVALID_TAG_NUMBER",
        "enum": "0"
      }, {
        "description": "REQUIRED_TAG_MISSING",
        "enum": "1"
      }, {
        "description": "SENDINGTIME_ACCURACY_PROBLEM",
        "enum": "10"
      }, {
        "description": "INVALID_MSGTYPE",
        "enum": "11"
      }, {
        "description": "XML_VALIDATION_ERROR",
        "enum": "12"
      }, {
        "description": "TAG_APPEARS_MORE_THAN_ONCE",
        "enum": "13"
      }, {
        "description": "TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER",
        "enum": "14"
      }, {
        "description": "REPEATING_GROUP_FIELDS_OUT_OF_ORDER",
        "enum": "15"
      }, {
        "description": "INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP",
        "enum": "16"
      }, {
        "description": "NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER",
        "enum": "17"
      }, {
        "description": "TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE",
        "enum": "2"
      }, {
        "description": "UNDEFINED_TAG",
        "enum": "3"
      }, {
        "description": "TAG_SPECIFIED_WITHOUT_A_VALUE",
        "enum": "4"
      }, {
        "description": "VALUE_IS_INCORRECT",
        "enum": "5"
      }, {
        "description": "INCORRECT_DATA_FORMAT_FOR_VALUE",
        "enum": "6"
      }, {
        "description": "DECRYPTION_PROBLEM",
        "enum": "7"
      }, {
        "description": "SIGNATURE_PROBLEM",
        "enum": "8"
      }, {
        "description": "COMPID_PROBLEM",
        "enum": "9"
      }, {
        "description": "OTHER",
        "enum": "99"
      }],
      "name": "SessionRejectReason",
      "number": "373",
      "type": "INT"
    }, {
      "name": "MaxMessageSize",
      "number": "383",
      "type": "LENGTH"
    }, {
      "name": "NoMsgTypes",
      "number": "384",
      "type": "NUMINGROUP"
    }, {
      "value": [{
        "description": "RECEIVE",
        "enum": "R"
      }, {
        "description": "SEND",
        "enum": "S"
      }],
      "name": "MsgDirection",
      "number": "385",
      "type": "CHAR"
    }, {
      "name": "TestMessageIndicator",
      "number": "464",
      "type": "BOOLEAN"
    }, {
      "name": "Username",
      "number": "553",
      "type": "STRING"
    }, {
      "name": "Password",
      "number": "554",
      "type": "STRING"
    }, {
      "name": "NoHops",
      "number": "627",
      "type": "NUMINGROUP"
    }, {
      "name": "HopCompID",
      "number": "628",
      "type": "STRING"
    }, {
      "name": "HopSendingTime",
      "number": "629",
      "type": "UTCTIMESTAMP"
    }, {
      "name": "HopRefID",
      "number": "630",
      "type": "SEQNUM"
    }, {
      "name": "NextExpectedMsgSeqNum",
      "number": "789",
      "type": "SEQNUM"
    }, {
      "value": [{
        "description": "FIX27",
        "enum": "0"
      }, {
        "description": "FIX30",
        "enum": "1"
      }, {
        "description": "FIX40",
        "enum": "2"
      }, {
        "description": "FIX41",
        "enum": "3"
      }, {
        "description": "FIX42",
        "enum": "4"
      }, {
        "description": "FIX43",
        "enum": "5"
      }, {
        "description": "FIX44",
        "enum": "6"
      }, {
        "description": "FIX50",
        "enum": "7"
      }, {
        "description": "FIX50SP1",
        "enum": "8"
      }, {
        "description": "FIX50SP2",
        "enum": "9"
      }],
      "name": "ApplVerID",
      "number": "1128",
      "type": "STRING"
    }, {
      "name": "CstmApplVerID",
      "number": "1129",
      "type": "STRING"
    }, {
      "name": "RefApplVerID",
      "number": "1130",
      "type": "STRING"
    }, {
      "name": "RefCstmApplVerID",
      "number": "1131",
      "type": "STRING"
    }, {
      "name": "DefaultApplVerID",
      "number": "1137",
      "type": "STRING"
    }]
  }
};
