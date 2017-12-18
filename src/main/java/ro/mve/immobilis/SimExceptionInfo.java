package ro.mve.immobilis;

public enum SimExceptionInfo {
	SIM_NET_001("URI connection exception.");

	final static String PREFIX = "SimException";
	final static String KEY_SEPARATOR = ".";
	private final String defaultEnglishMessage;

	SimExceptionInfo() {
		defaultEnglishMessage = null;
	}

	SimExceptionInfo(String key) {
		this.defaultEnglishMessage = key;
	}

	@Override
	public String toString() {
		return defaultEnglishMessage;
	}

	public String getKey() {
		return PREFIX + KEY_SEPARATOR + this.name();
	}

}