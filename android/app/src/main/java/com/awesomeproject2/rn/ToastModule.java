package com.awesomeproject2.rn;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by xiongxiaofeng on 2018/5/22.
 */

public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * @return js调用的模块名
     */
    @Override
    public String getName() {
        return "ToastModule";
    }

    /**
     * 给rn定义模块的一些常量
     *
     * @return 常量的一些键值
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    /**
     * 使用ReactMethod注解，使这个方法被js调用
     *
     * @param message  文本
     * @param duration 时长
     */
    @ReactMethod
    public void show(String message, int duration, Callback success, Callback error) {
        try {
            Log.i("xxffff", "11111111111111111");
            Toast.makeText(getReactApplicationContext(), message, duration).show();
            success.invoke("1234567");
        } catch (Exception e) {
            error.invoke("error");
        }
    }

    @ReactMethod
    public void getuuid(String mesage, Callback callback) {
        Log.i("xxffff",mesage);
        String uuid = "asd89fysadfisadfhdfs";
        callback.invoke(uuid);
    }


}
