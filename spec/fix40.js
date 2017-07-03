module.exports = {
  "Version": "FIX.4.0",
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
    "Required": ["8", "9", "35", "49", "56", "34", "52"],
    "Optional": ["115", "128", "90", "91", "50", "57", "116", "129", "43", "97", "122"]
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
    "6": {
      "name": "IOI",
      "msgcat": "app"
    },
    "7": {
      "name": "Advertisement",
      "msgcat": "app"
    },
    "8": {
      "name": "ExecutionReport",
      "msgcat": "app"
    },
    "9": {
      "name": "OrderCancelReject",
      "msgcat": "app"
    },
    "A": {
      "name": "Logon",
      "msgcat": "admin"
    },
    "B": {
      "name": "News",
      "msgcat": "app"
    },
    "C": {
      "name": "Email",
      "msgcat": "app"
    },
    "D": {
      "name": "NewOrderSingle",
      "msgcat": "app"
    },
    "E": {
      "name": "NewOrderList",
      "msgcat": "app"
    },
    "F": {
      "name": "OrderCancelRequest",
      "msgcat": "app"
    },
    "G": {
      "name": "OrderCancelReplaceRequest",
      "msgcat": "app"
    },
    "H": {
      "name": "OrderStatusRequest",
      "msgcat": "app"
    },
    "J": {
      "name": "Allocation",
      "msgcat": "app"
    },
    "K": {
      "name": "ListCancelRequest",
      "msgcat": "app"
    },
    "L": {
      "name": "ListExecute",
      "msgcat": "app"
    },
    "M": {
      "name": "ListStatusRequest",
      "msgcat": "app"
    },
    "N": {
      "name": "ListStatus",
      "msgcat": "app"
    },
    "P": {
      "name": "AllocationInstructionAck",
      "msgcat": "app"
    },
    "Q": {
      "name": "DontKnowTrade",
      "msgcat": "app"
    },
    "R": {
      "name": "QuoteRequest",
      "msgcat": "app"
    },
    "S": {
      "name": "Quote",
      "msgcat": "app"
    }
  },
  "Fields": {
    "1": "Account",
    "2": "AdvId",
    "3": "AdvRefID",
    "4": "AdvSide",
    "5": "AdvTransType",
    "6": "AvgPx",
    "7": "BeginSeqNo",
    "8": "BeginString",
    "9": "BodyLength",
    "10": "CheckSum",
    "11": "ClOrdID",
    "12": "Commission",
    "13": "CommType",
    "14": "CumQty",
    "15": "Currency",
    "16": "EndSeqNo",
    "17": "ExecID",
    "18": "ExecInst",
    "19": "ExecRefID",
    "20": "ExecTransType",
    "21": "HandlInst",
    "22": "IDSource",
    "23": "IOIid",
    "24": "IOIOthSvc",
    "25": "IOIQltyInd",
    "26": "IOIRefID",
    "27": "IOIShares",
    "28": "IOITransType",
    "29": "LastCapacity",
    "30": "LastMkt",
    "31": "LastPx",
    "32": "LastShares",
    "33": "LinesOfText",
    "34": "MsgSeqNum",
    "35": "MsgType",
    "36": "NewSeqNo",
    "37": "OrderID",
    "38": "OrderQty",
    "39": "OrdStatus",
    "40": "OrdType",
    "41": "OrigClOrdID",
    "42": "OrigTime",
    "43": "PossDupFlag",
    "44": "Price",
    "45": "RefSeqNum",
    "46": "RelatdSym",
    "47": "Rule80A",
    "48": "SecurityID",
    "49": "SenderCompID",
    "50": "SenderSubID",
    "52": "SendingTime",
    "53": "Shares",
    "54": "Side",
    "55": "Symbol",
    "56": "TargetCompID",
    "57": "TargetSubID",
    "58": "Text",
    "59": "TimeInForce",
    "60": "TransactTime",
    "61": "Urgency",
    "62": "ValidUntilTime",
    "63": "SettlmntTyp",
    "64": "FutSettDate",
    "65": "SymbolSfx",
    "66": "ListID",
    "67": "ListSeqNo",
    "68": "ListNoOrds",
    "69": "ListExecInst",
    "70": "AllocID",
    "71": "AllocTransType",
    "72": "RefAllocID",
    "73": "NoOrders",
    "74": "AvgPrxPrecision",
    "75": "TradeDate",
    "76": "ExecBroker",
    "77": "OpenClose",
    "78": "NoAllocs",
    "79": "AllocAccount",
    "80": "AllocShares",
    "81": "ProcessCode",
    "82": "NoRpts",
    "83": "RptSeq",
    "84": "CxlQty",
    "85": "NoDlvyInst",
    "86": "DlvyInst",
    "87": "AllocStatus",
    "88": "AllocRejCode",
    "89": "Signature",
    "90": "SecureDataLen",
    "91": "SecureData",
    "92": "BrokerOfCredit",
    "93": "SignatureLength",
    "94": "EmailType",
    "95": "RawDataLength",
    "96": "RawData",
    "97": "PossResend",
    "98": "EncryptMethod",
    "99": "StopPx",
    "100": "ExDestination",
    "102": "CxlRejReason",
    "103": "OrdRejReason",
    "104": "IOIQualifier",
    "105": "WaveNo",
    "106": "Issuer",
    "107": "SecurityDesc",
    "108": "HeartBtInt",
    "109": "ClientID",
    "110": "MinQty",
    "111": "MaxFloor",
    "112": "TestReqID",
    "113": "ReportToExch",
    "114": "LocateReqd",
    "115": "OnBehalfOfCompID",
    "116": "OnBehalfOfSubID",
    "117": "QuoteID",
    "118": "NetMoney",
    "119": "SettlCurrAmt",
    "120": "SettlCurrency",
    "121": "ForexReq",
    "122": "OrigSendingTime",
    "123": "GapFillFlag",
    "124": "NoExecs",
    "125": "CxlType",
    "126": "ExpireTime",
    "127": "DKReason",
    "128": "DeliverToCompID",
    "129": "DeliverToSubID",
    "130": "IOINaturalFlag",
    "131": "QuoteReqID",
    "132": "BidPx",
    "133": "OfferPx",
    "134": "BidSize",
    "135": "OfferSize",
    "136": "NoMiscFees",
    "137": "MiscFeeAmt",
    "138": "MiscFeeCurr",
    "139": "MiscFeeType",
    "140": "PrevClosePx",
    "HasValue": ["4", "5", "13", "18", "20", "21", "22", "24", "25", "27", "28", "29", "35", "39", "40", "43", "47", "54", "59", "61", "63", "71", "81", "87", "88", "94", "98", "100", "102", "103", "104", "113", "114", "121", "123", "125", "127", "130", "139"],
    "ValueDictionary": {
      "4": [{
        "B": "BUY"
      }, {
        "S": "SELL"
      }, {
        "T": "TRADE"
      }, {
        "X": "CROSS"
      }],
      "5": [{
        "C": "CANCEL"
      }, {
        "N": "NEW"
      }, {
        "R": "REPLACE"
      }],
      "13": [{
        "1": "PER_SHARE"
      }, {
        "2": "PERCENTAGE"
      }, {
        "3": "ABSOLUTE"
      }],
      "18": [{
        "0": "STAY_ON_OFFERSIDE"
      }, {
        "1": "NOT_HELD"
      }, {
        "2": "WORK"
      }, {
        "3": "GO_ALONG"
      }, {
        "4": "OVER_THE_DAY"
      }, {
        "5": "HELD"
      }, {
        "6": "PARTICIPATE_DONT_INITIATE"
      }, {
        "7": "STRICT_SCALE"
      }, {
        "8": "TRY_TO_SCALE"
      }, {
        "9": "STAY_ON_BIDSIDE"
      }, {
        "A": "NO_CROSS"
      }, {
        "B": "OK_TO_CROSS"
      }, {
        "C": "CALL_FIRST"
      }, {
        "D": "PERCENT_OF_VOLUME"
      }, {
        "E": "DO_NOT_INCREASE"
      }, {
        "F": "DO_NOT_REDUCE"
      }, {
        "G": "ALL_OR_NONE"
      }, {
        "I": "INSTITUTIONS_ONLY"
      }, {
        "L": "LAST_PEG"
      }, {
        "M": "MID_PRICE_PEG"
      }, {
        "N": "NON_NEGOTIABLE"
      }, {
        "O": "OPENING_PEG"
      }, {
        "P": "MARKET_PEG"
      }, {
        "R": "PRIMARY_PEG"
      }, {
        "S": "SUSPEND"
      }],
      "20": [{
        "0": "NEW"
      }, {
        "1": "CANCEL"
      }, {
        "2": "CORRECT"
      }, {
        "3": "STATUS"
      }],
      "21": [{
        "1": "AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION"
      }, {
        "2": "AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK"
      }, {
        "3": "MANUAL_ORDER_BEST_EXECUTION"
      }],
      "22": [{
        "1": "CUSIP"
      }, {
        "2": "SEDOL"
      }, {
        "3": "QUIK"
      }, {
        "4": "ISIN_NUMBER"
      }, {
        "5": "RIC_CODE"
      }],
      "24": [{
        "A": "AUTEX"
      }, {
        "B": "BRIDGE"
      }],
      "25": [{
        "H": "HIGH"
      }, {
        "L": "LOW"
      }, {
        "M": "MEDIUM"
      }],
      "27": [{
        "L": "LARGE"
      }, {
        "M": "MEDIUM"
      }, {
        "S": "SMALL"
      }],
      "28": [{
        "C": "CANCEL"
      }, {
        "N": "NEW"
      }, {
        "R": "REPLACE"
      }],
      "29": [{
        "1": "AGENT"
      }, {
        "2": "CROSS_AS_AGENT"
      }, {
        "3": "CROSS_AS_PRINCIPAL"
      }, {
        "4": "PRINCIPAL"
      }],
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
        "D": "ORDER_D"
      }, {
        "E": "ORDER_E"
      }, {
        "F": "ORDER_CANCEL_REQUEST"
      }, {
        "G": "ORDER_CANCEL_REPLACE_REQUEST"
      }, {
        "H": "ORDER_STATUS_REQUEST"
      }, {
        "J": "ALLOCATION"
      }, {
        "K": "LIST_CANCEL_REQUEST"
      }, {
        "L": "LIST_EXECUTE"
      }, {
        "M": "LIST_STATUS_REQUEST"
      }, {
        "N": "LIST_STATUS"
      }, {
        "P": "ALLOCATION_ACK"
      }, {
        "Q": "DONT_KNOW_TRADE"
      }, {
        "R": "QUOTE_REQUEST"
      }, {
        "S": "QUOTE"
      }],
      "39": [{
        "0": "NEW"
      }, {
        "1": "PARTIALLY_FILLED"
      }, {
        "2": "FILLED"
      }, {
        "3": "DONE_FOR_DAY"
      }, {
        "4": "CANCELED"
      }, {
        "5": "REPLACED"
      }, {
        "6": "PENDING_CANCEL_REPLACE"
      }, {
        "7": "STOPPED"
      }, {
        "8": "REJECTED"
      }, {
        "9": "SUSPENDED"
      }, {
        "A": "PENDING_NEW"
      }, {
        "B": "CALCULATED"
      }, {
        "C": "EXPIRED"
      }],
      "40": [{
        "1": "MARKET"
      }, {
        "2": "LIMIT"
      }, {
        "3": "STOP"
      }, {
        "4": "STOP_LIMIT"
      }, {
        "5": "MARKET_ON_CLOSE"
      }, {
        "6": "WITH_OR_WITHOUT"
      }, {
        "7": "LIMIT_OR_BETTER"
      }, {
        "8": "LIMIT_WITH_OR_WITHOUT"
      }, {
        "9": "ON_BASIS"
      }, {
        "A": "ON_CLOSE"
      }, {
        "B": "LIMIT_ON_CLOSE"
      }, {
        "C": "FOREX"
      }, {
        "D": "PREVIOUSLY_QUOTED"
      }, {
        "E": "PREVIOUSLY_INDICATED"
      }, {
        "P": "PEGGED"
      }],
      "43": [{
        "N": "NO"
      }, {
        "Y": "YES"
      }],
      "47": [{
        "A": "AGENCY_SINGLE_ORDER"
      }, {
        "C": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM_ORG"
      }, {
        "D": "PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM_ORG"
      }, {
        "I": "INDIVIDUAL_INVESTOR_SINGLE_ORDER"
      }, {
        "J": "PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER"
      }, {
        "K": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER"
      }, {
        "M": "PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER"
      }, {
        "N": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER"
      }, {
        "U": "PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY"
      }, {
        "W": "ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER"
      }, {
        "Y": "PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY"
      }],
      "54": [{
        "1": "BUY"
      }, {
        "2": "SELL"
      }, {
        "3": "BUY_MINUS"
      }, {
        "4": "SELL_PLUS"
      }, {
        "5": "SELL_SHORT"
      }, {
        "6": "SELL_SHORT_EXEMPT"
      }],
      "59": [{
        "0": "DAY"
      }, {
        "1": "GOOD_TILL_CANCEL"
      }, {
        "2": "AT_THE_OPENING"
      }, {
        "3": "IMMEDIATE_OR_CANCEL"
      }, {
        "4": "FILL_OR_KILL"
      }, {
        "5": "GOOD_TILL_CROSSING"
      }, {
        "6": "GOOD_TILL_DATE"
      }],
      "61": [{
        "0": "NORMAL"
      }, {
        "1": "FLASH"
      }, {
        "2": "BACKGROUND"
      }],
      "63": [{
        "0": "REGULAR"
      }, {
        "1": "CASH"
      }, {
        "2": "NEXT_DAY"
      }, {
        "3": "T_PLUS_2"
      }, {
        "4": "T_PLUS_3"
      }, {
        "5": "T_PLUS_4"
      }, {
        "6": "FUTURE"
      }, {
        "7": "WHEN_ISSUED"
      }, {
        "8": "SELLERS_OPTION"
      }, {
        "9": "T_PLUS_5"
      }],
      "71": [{
        "0": "NEW"
      }, {
        "1": "REPLACE"
      }, {
        "2": "CANCEL"
      }],
      "81": [{
        "0": "REGULAR"
      }, {
        "1": "SOFT_DOLLAR"
      }, {
        "2": "STEP_IN"
      }, {
        "3": "STEP_OUT"
      }, {
        "4": "SOFT_DOLLAR_STEP_IN"
      }, {
        "5": "SOFT_DOLLAR_STEP_OUT"
      }, {
        "6": "PLAN_SPONSOR"
      }],
      "87": [{
        "0": "ACCEPTED"
      }, {
        "1": "REJECTED"
      }, {
        "2": "PARTIAL_ACCEPT"
      }, {
        "3": "RECEIVED"
      }],
      "88": [{
        "0": "UNKNOWN_ACCOUNT"
      }, {
        "1": "INCORRECT_QUANTITY"
      }, {
        "2": "INCORRECT_AVERAGE_PRICE"
      }, {
        "3": "UNKNOWN_EXECUTING_BROKER_MNEMONIC"
      }, {
        "4": "COMMISSION_DIFFERENCE"
      }, {
        "5": "UNKNOWN_ORDERID"
      }, {
        "6": "UNKNOWN_LISTID"
      }, {
        "7": "OTHER"
      }],
      "94": [{
        "0": "NEW"
      }, {
        "1": "REPLY"
      }, {
        "2": "ADMIN_REPLY"
      }],
      "98": [{
        "0": "NONE"
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
      "100": [{
        "0": "NONE"
      }, {
        "4": "POSIT"
      }],
      "102": [{
        "0": "TOO_LATE_TO_CANCEL"
      }, {
        "1": "UNKNOWN_ORDER"
      }],
      "103": [{
        "0": "BROKER_OPTION"
      }, {
        "1": "UNKNOWN_SYMBOL"
      }, {
        "2": "EXCHANGE_CLOSED"
      }, {
        "3": "ORDER_EXCEEDS_LIMIT"
      }, {
        "4": "TOO_LATE_TO_ENTER"
      }],
      "104": [{
        "A": "ALL_OR_NONE"
      }, {
        "C": "AT_THE_CLOSE"
      }, {
        "I": "IN_TOUCH_WITH"
      }, {
        "L": "LIMIT"
      }, {
        "M": "MORE_BEHIND"
      }, {
        "O": "AT_THE_OPEN"
      }, {
        "P": "TAKING_A_POSITION"
      }, {
        "Q": "CURRENT_QUOTE"
      }, {
        "S": "PORTFOLIO_SHOW_N"
      }, {
        "T": "THROUGH_THE_DAY"
      }, {
        "V": "VERSUS"
      }, {
        "W": "INDICATION"
      }, {
        "X": "CROSSING_OPPORTUNITY"
      }],
      "113": [{
        "N": "NO"
      }, {
        "Y": "YES"
      }],
      "114": [{
        "N": "NO"
      }, {
        "Y": "YES"
      }],
      "121": [{
        "N": "NO"
      }, {
        "Y": "YES"
      }],
      "123": [{
        "N": "NO"
      }, {
        "Y": "YES"
      }],
      "125": [{
        "F": "FULL_REMAINING_QUANTITY"
      }, {
        "P": "PARTIAL_CANCEL"
      }],
      "127": [{
        "A": "UNKNOWN_SYMBOL"
      }, {
        "B": "WRONG_SIDE"
      }, {
        "C": "QUANTITY_EXCEEDS_ORDER"
      }, {
        "D": "NO_MATCHING_ORDER"
      }, {
        "E": "PRICE_EXCEEDS_LIMIT"
      }, {
        "Z": "OTHER"
      }],
      "130": [{
        "N": "NO"
      }, {
        "Y": "YES"
      }],
      "139": [{
        "1": "REGULATORY"
      }, {
        "2": "TAX"
      }, {
        "3": "LOCAL_COMMISSION"
      }, {
        "4": "EXCHANGE_FEES"
      }, {
        "5": "STAMP"
      }, {
        "6": "LEVY"
      }, {
        "7": "OTHER"
      }]
    }
  }
};