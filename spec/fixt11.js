module.exports = {
  "Version": "FIXT.1.1",
  "Header": {
    "8": "BeginString",
    "9": "BodyLength",
    "34": "MsgSeqNum",
    "35": "MsgType",
    "43": "PossDupFlag",
    "49": "SenderCompID",
    "50": "SenderSubID",
    "52": "SendingTime",
    "56": "TargetCompID",
    "57": "TargetSubID",
    "90": "SecureDataLen",
    "91": "SecureData",
    "97": "PossResend",
    "115": "OnBehalfOfCompID",
    "116": "OnBehalfOfSubID",
    "122": "OrigSendingTime",
    "128": "DeliverToCompID",
    "129": "DeliverToSubID",
    "142": "SenderLocationID",
    "143": "TargetLocationID",
    "144": "OnBehalfOfLocationID",
    "145": "DeliverToLocationID",
    "212": "XmlDataLen",
    "213": "XmlData",
    "347": "MessageEncoding",
    "369": "LastMsgSeqNumProcessed",
    "1128": "ApplVerID",
    "1129": "CstmApplVerID",
    "Required": ["8", "9", "35", "49", "56", "34", "52"],
    "Optional": ["115", "128", "90", "91", "50", "142", "57", "143", "116", "144", "129", "145", "43", "97", "122", "212", "213", "347", "369", "1128", "1129"]
  },
  "Trailer": {
    "10": "CheckSum",
    "89": "Signature",
    "93": "SignatureLength",
    "Required": ["10"],
    "Optional": ["93", "89"]
  },
  "Messages": {
    "0": {
      "name": "Heartbeat",
      "msgcat": "admin"
    },
    "1": {
      "name": "TestRequest",
      "msgcat": "admin"
    },
    "2": {
      "name": "ResendRequest",
      "msgcat": "admin"
    },
    "3": {
      "name": "Reject",
      "msgcat": "admin"
    },
    "4": {
      "name": "SequenceReset",
      "msgcat": "admin"
    },
    "5": {
      "name": "Logout",
      "msgcat": "admin"
    },
    "A": {
      "name": "Logon",
      "msgcat": "admin"
    }
  },
  "Fields": {
    "7": "BeginSeqNo",
    "8": "BeginString",
    "9": "BodyLength",
    "10": "CheckSum",
    "16": "EndSeqNo",
    "34": "MsgSeqNum",
    "35": "MsgType",
    "36": "NewSeqNo",
    "43": "PossDupFlag",
    "45": "RefSeqNum",
    "49": "SenderCompID",
    "50": "SenderSubID",
    "52": "SendingTime",
    "56": "TargetCompID",
    "57": "TargetSubID",
    "58": "Text",
    "89": "Signature",
    "90": "SecureDataLen",
    "91": "SecureData",
    "93": "SignatureLength",
    "95": "RawDataLength",
    "96": "RawData",
    "97": "PossResend",
    "98": "EncryptMethod",
    "108": "HeartBtInt",
    "112": "TestReqID",
    "115": "OnBehalfOfCompID",
    "116": "OnBehalfOfSubID",
    "122": "OrigSendingTime",
    "123": "GapFillFlag",
    "128": "DeliverToCompID",
    "129": "DeliverToSubID",
    "141": "ResetSeqNumFlag",
    "142": "SenderLocationID",
    "143": "TargetLocationID",
    "144": "OnBehalfOfLocationID",
    "145": "DeliverToLocationID",
    "212": "XmlDataLen",
    "213": "XmlData",
    "347": "MessageEncoding",
    "354": "EncodedTextLen",
    "355": "EncodedText",
    "369": "LastMsgSeqNumProcessed",
    "371": "RefTagID",
    "372": "RefMsgType",
    "373": "SessionRejectReason",
    "383": "MaxMessageSize",
    "384": "NoMsgTypes",
    "385": "MsgDirection",
    "464": "TestMessageIndicator",
    "553": "Username",
    "554": "Password",
    "627": "NoHops",
    "628": "HopCompID",
    "629": "HopSendingTime",
    "630": "HopRefID",
    "789": "NextExpectedMsgSeqNum",
    "1128": "ApplVerID",
    "1129": "CstmApplVerID",
    "1130": "RefApplVerID",
    "1131": "RefCstmApplVerID",
    "1137": "DefaultApplVerID",
    "HasValue": ["35", "98", "347", "373", "385", "1128"],
    "ValueDictionary": {
      "35": [{
        "0": "HEARTBEAT"
      }, {
        "1": "TEST_REQUEST"
      }, {
        "2": "RESEND_REQUEST"
      }, {
        "3": "REJECT"
      }, {
        "4": "SEQUENCE_RESET"
      }, {
        "5": "LOGOUT"
      }, {
        "6": "INDICATION_OF_INTEREST"
      }, {
        "7": "ADVERTISEMENT"
      }, {
        "8": "EXECUTION_REPORT"
      }, {
        "9": "ORDER_CANCEL_REJECT"
      }, {
        "A": "LOGON"
      }, {
        "B": "NEWS"
      }, {
        "C": "EMAIL"
      }, {
        "D": "ORDER_SINGLE"
      }, {
        "E": "ORDER_LIST"
      }, {
        "F": "ORDER_CANCEL_REQUEST"
      }, {
        "G": "ORDER_CANCEL_REPLACE_REQUEST"
      }, {
        "H": "ORDER_STATUS_REQUEST"
      }, {
        "J": "ALLOCATION_INSTRUCTION"
      }, {
        "K": "LIST_CANCEL_REQUEST"
      }, {
        "L": "LIST_EXECUTE"
      }, {
        "M": "LIST_STATUS_REQUEST"
      }, {
        "N": "LIST_STATUS"
      }, {
        "P": "ALLOCATION_INSTRUCTION_ACK"
      }, {
        "Q": "DONT_KNOW_TRADE"
      }, {
        "R": "QUOTE_REQUEST"
      }, {
        "S": "QUOTE"
      }, {
        "T": "SETTLEMENT_INSTRUCTIONS"
      }, {
        "V": "MARKET_DATA_REQUEST"
      }, {
        "W": "MARKET_DATA_SNAPSHOT_FULL_REFRESH"
      }, {
        "X": "MARKET_DATA_INCREMENTAL_REFRESH"
      }, {
        "Y": "MARKET_DATA_REQUEST_REJECT"
      }, {
        "Z": "QUOTE_CANCEL"
      }, {
        "a": "QUOTE_STATUS_REQUEST"
      }, {
        "b": "MASS_QUOTE_ACKNOWLEDGEMENT"
      }, {
        "c": "SECURITY_DEFINITION_REQUEST"
      }, {
        "d": "SECURITY_DEFINITION"
      }, {
        "e": "SECURITY_STATUS_REQUEST"
      }, {
        "f": "SECURITY_STATUS"
      }, {
        "g": "TRADING_SESSION_STATUS_REQUEST"
      }, {
        "h": "TRADING_SESSION_STATUS"
      }, {
        "i": "MASS_QUOTE"
      }, {
        "j": "BUSINESS_MESSAGE_REJECT"
      }, {
        "k": "BID_REQUEST"
      }, {
        "l": "BID_RESPONSE"
      }, {
        "m": "LIST_STRIKE_PRICE"
      }, {
        "n": "XML_MESSAGE"
      }, {
        "o": "REGISTRATION_INSTRUCTIONS"
      }, {
        "p": "REGISTRATION_INSTRUCTIONS_RESPONSE"
      }, {
        "q": "ORDER_MASS_CANCEL_REQUEST"
      }, {
        "r": "ORDER_MASS_CANCEL_REPORT"
      }, {
        "s": "NEW_ORDER_CROSS"
      }, {
        "t": "CROSS_ORDER_CANCEL_REPLACE_REQUEST"
      }, {
        "u": "CROSS_ORDER_CANCEL_REQUEST"
      }, {
        "v": "SECURITY_TYPE_REQUEST"
      }, {
        "w": "SECURITY_TYPES"
      }, {
        "x": "SECURITY_LIST_REQUEST"
      }, {
        "y": "SECURITY_LIST"
      }, {
        "z": "DERIVATIVE_SECURITY_LIST_REQUEST"
      }, {
        "AA": "DERIVATIVE_SECURITY_LIST"
      }, {
        "AB": "NEW_ORDER_MULTILEG"
      }, {
        "AC": "MULTILEG_ORDER_CANCEL_REPLACE"
      }, {
        "AD": "TRADE_CAPTURE_REPORT_REQUEST"
      }, {
        "AE": "TRADE_CAPTURE_REPORT"
      }, {
        "AF": "ORDER_MASS_STATUS_REQUEST"
      }, {
        "AG": "QUOTE_REQUEST_REJECT"
      }, {
        "AH": "RFQ_REQUEST"
      }, {
        "AI": "QUOTE_STATUS_REPORT"
      }, {
        "AJ": "QUOTE_RESPONSE"
      }, {
        "AK": "CONFIRMATION"
      }, {
        "AL": "POSITION_MAINTENANCE_REQUEST"
      }, {
        "AM": "POSITION_MAINTENANCE_REPORT"
      }, {
        "AN": "REQUEST_FOR_POSITIONS"
      }, {
        "AO": "REQUEST_FOR_POSITIONS_ACK"
      }, {
        "AP": "POSITION_REPORT"
      }, {
        "AQ": "TRADE_CAPTURE_REPORT_REQUEST_ACK"
      }, {
        "AR": "TRADE_CAPTURE_REPORT_ACK"
      }, {
        "AS": "ALLOCATION_REPORT"
      }, {
        "AT": "ALLOCATION_REPORT_ACK"
      }, {
        "AU": "CONFIRMATION_ACK"
      }, {
        "AV": "SETTLEMENT_INSTRUCTION_REQUEST"
      }, {
        "AW": "ASSIGNMENT_REPORT"
      }, {
        "AX": "COLLATERAL_REQUEST"
      }, {
        "AY": "COLLATERAL_ASSIGNMENT"
      }, {
        "AZ": "COLLATERAL_RESPONSE"
      }, {
        "BA": "COLLATERAL_REPORT"
      }, {
        "BB": "COLLATERAL_INQUIRY"
      }, {
        "BC": "NETWORK_STATUS_REQUEST"
      }, {
        "BD": "NETWORK_STATUS_RESPONSE"
      }, {
        "BE": "USER_REQUEST"
      }, {
        "BF": "USER_RESPONSE"
      }, {
        "BG": "COLLATERAL_INQUIRY_ACK"
      }, {
        "BH": "CONFIRMATION_REQUEST"
      }, {
        "BI": "TRADING_SESSION_LIST_REQUEST"
      }, {
        "BJ": "TRADING_SESSION_LIST"
      }, {
        "BK": "SECURITY_LIST_UPDATE_REPORT"
      }, {
        "BL": "ADJUSTED_POSITION_REPORT"
      }, {
        "BM": "ALLOCATION_INSTRUCTION_ALERT"
      }, {
        "BN": "EXECUTION_ACKNOWLEDGEMENT"
      }, {
        "BO": "CONTRARY_INTENTION_REPORT"
      }, {
        "BP": "SECURITY_DEFINITION_UPDATE_REPORT"
      }],
      "98": [{
        "0": "NONE_OTHER"
      }, {
        "1": "PKCS"
      }, {
        "2": "DES"
      }, {
        "3": "PKCS_DES"
      }, {
        "4": "PGP_DES"
      }, {
        "5": "PGP_DES_MD5"
      }, {
        "6": "PEM_DES_MD5"
      }],
      "347": [{
        "ISO-2022-JP": "ISO_2022_JP"
      }, {
        "EUC-JP": "EUC_JP"
      }, {
        "SHIFT_JIS": "SHIFT_JIS"
      }, {
        "UTF-8": "UTF_8"
      }],
      "373": [{
        "0": "INVALID_TAG_NUMBER"
      }, {
        "1": "REQUIRED_TAG_MISSING"
      }, {
        "10": "SENDINGTIME_ACCURACY_PROBLEM"
      }, {
        "11": "INVALID_MSGTYPE"
      }, {
        "12": "XML_VALIDATION_ERROR"
      }, {
        "13": "TAG_APPEARS_MORE_THAN_ONCE"
      }, {
        "14": "TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER"
      }, {
        "15": "REPEATING_GROUP_FIELDS_OUT_OF_ORDER"
      }, {
        "16": "INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP"
      }, {
        "17": "NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER"
      }, {
        "2": "TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE"
      }, {
        "3": "UNDEFINED_TAG"
      }, {
        "4": "TAG_SPECIFIED_WITHOUT_A_VALUE"
      }, {
        "5": "VALUE_IS_INCORRECT"
      }, {
        "6": "INCORRECT_DATA_FORMAT_FOR_VALUE"
      }, {
        "7": "DECRYPTION_PROBLEM"
      }, {
        "8": "SIGNATURE_PROBLEM"
      }, {
        "9": "COMPID_PROBLEM"
      }, {
        "99": "OTHER"
      }],
      "385": [{
        "R": "RECEIVE"
      }, {
        "S": "SEND"
      }],
      "1128": [{
        "0": "FIX27"
      }, {
        "1": "FIX30"
      }, {
        "2": "FIX40"
      }, {
        "3": "FIX41"
      }, {
        "4": "FIX42"
      }, {
        "5": "FIX43"
      }, {
        "6": "FIX44"
      }, {
        "7": "FIX50"
      }, {
        "8": "FIX50SP1"
      }, {
        "9": "FIX50SP2"
      }]
    }
  }
};